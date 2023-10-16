import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import jwtdecode from 'jwt-decode'
import { googleLogout } from '@react-oauth/google'
import { api } from '@/utils/handleClient'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

export interface IUser {
  id: string
  level: number
  name: string
  email?: string
  avatar: string
  balance: number
  cpf?: string
  actived: boolean
  phone_number?: string
  is_first_calculation: boolean
  created_at: string
  updated_at: string
  avatar_url: string
}

interface IAuthState {
  token: string
  user: IUser
}

interface IAuthContextData {
  user: IUser
  token: string
  signIn(data: IAuthState): IAuthState | null
  signOut(): void
  updateUser(user: IUser): void
  refreshBalance(value: string): void
  setIsFirstCalculation(): void
  isAuthenticated(): boolean
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState)

  const signIn = useCallback((data: IAuthState) => {
    const { token, user } = data

    if (data.token === 'inactive-user--resend-mail') {
      return null
    }

    if (user) {
      const newUser = {
        id: user.id,
        level: user.level,
        name: user.name,
        avatar: user.avatar,
        balance: user.balance,
        actived: user.actived,
        is_first_calculation: user.is_first_calculation,
        created_at: user.created_at,
        updated_at: user.updated_at,
        avatar_url: user.avatar_url,
      } as IUser

      setCookie(null, '@Alosix:token', token, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })
      setCookie(null, '@Alosix:user', JSON.stringify(user), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ token, user: newUser })
      return { token, user }
    }
    return { token, user }
  }, [])

  const cookies = parseCookies()
  const { '@Alosix:token': tokenStorage, '@Alosix:user': userStorage } = cookies

  useEffect(() => {
    if (tokenStorage && userStorage) {
      api.defaults.headers.authorization = `Bearer ${tokenStorage}`

      setData({ token: tokenStorage, user: JSON.parse(userStorage) })
    }
  }, [tokenStorage, userStorage])

  const signOut = useCallback(() => {
    destroyCookie(null, '@Alosix:order', {
      path: '/',
    })
    destroyCookie(null, '@Alosix:token', {
      path: '/',
    })
    destroyCookie(null, '@Alosix:user', {
      path: '/',
    })

    googleLogout()

    setData({} as IAuthState)
  }, [setData])

  const isAuthenticated = useCallback(() => {
    const { token } = data
    try {
      const { exp }: any = jwtdecode(token)
      if (Date.now() >= exp * 1000) {
        signOut()
        return false
      }
    } catch (err) {
      return false
    }
    return true
  }, [data, signOut])

  const updateUser = useCallback(
    (user: IUser) => {
      setCookie(null, '@Alosix:user', JSON.stringify(user), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })

      setData({
        token: data.token,
        user,
      })
    },
    [setData, data.token],
  )

  const refreshBalance = useCallback(
    (value: string) => {
      const cookies = parseCookies()
      const { '@Alosix:user': userStore } = cookies

      if (userStore) {
        const user = JSON.parse(userStore)

        setData({
          token: data.token,
          user: { ...user, balance: value },
        })
      }
    },
    [setData, data.token],
  )

  const setIsFirstCalculation = useCallback(() => {
    const cookies = parseCookies()
    const { '@Alosix:user': userStore } = cookies

    if (userStore) {
      const user = JSON.parse(userStore)

      setData({
        token: data.token,
        user: { ...user, is_first_calculation: true },
      })

      setCookie(
        null,
        '@Alosix:user',
        JSON.stringify({ ...user, is_first_calculation: true }),
        {
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: '/',
        },
      )
    }
  }, [setData, data.token])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signOut,
        updateUser,
        isAuthenticated,
        refreshBalance,
        setIsFirstCalculation,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
