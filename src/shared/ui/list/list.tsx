import { FC, ReactNode } from 'react'

import { Wrapper } from './list.styled'

type PropsType = {
  children: ReactNode
}
export const List: FC<PropsType> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
