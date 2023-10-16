import { Text, styled } from '@alosix-hub-ui/react'

import peopleHappy from '@/assets/people-happy.png'

export const CongratulationsContainer = styled('div', {
  display: 'block',
  width: '640px',

  backgroundImage: `url(${peopleHappy.src})`,
  backgroundSize: '36%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom -15px',
  minHeight: '212px',
})

export const SampleProccess = styled('div', {
  [`> ${Text}`]: {
    fontWeight: 'bold',
    marginTop: 0,
    display: 'block',
    fontSize: '16px',
  },
})
