import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

export { default } from './home'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { '@Alosix:user': userOnCookies } = parseCookies({ req })

  const user = userOnCookies ? JSON.parse(userOnCookies) : null

  return {
    props: {
      user,
    },
  }
}
