import React, { useEffect, useRef, useState } from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { DotsBtn, NavSettingsContainer } from './styles'
import ButtonConfirm from '@/components/ButtonConfirm'

interface NavSettingsProps {
  reportId: string
  onRemoveSample(id: string): void
}

export default function NavSettings({
  reportId,
  onRemoveSample,
}: NavSettingsProps) {
  const [active, setActive] = useState(false)
  const wrapperRef = useRef(null)

  function useOutsideAlerter(reference: any): void {
    useEffect(() => {
      function handleClickOutside(event: any): void {
        if (reference.current && !reference.current.contains(event.target)) {
          setActive(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [reference])
  }

  useOutsideAlerter(wrapperRef)

  return (
    <NavSettingsContainer>
      <DotsBtn
        type="button"
        onClick={() => setActive(!active)}
        ref={wrapperRef}
      >
        <FaEllipsisV size={22} />
      </DotsBtn>

      {active && (
        <ul ref={wrapperRef}>
          <li>
            <ButtonConfirm
              idRemoved={reportId}
              removeAction={onRemoveSample}
              format={{ style: 'primary', size: 13 }}
              setActive={setActive}
            >
              Excluir
            </ButtonConfirm>
          </li>
        </ul>
      )}
    </NavSettingsContainer>
  )
}
