import { FC, ReactNode } from 'react'

import { Wrapper } from './main.styled'

import { Container } from '@/shared/ui'

type PropsType = {
  children: ReactNode
}
export const Main: FC<PropsType> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}
