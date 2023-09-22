import { FC } from 'react'

import { IoMoon, IoMoonOutline } from 'react-icons/io5'

import { Title, Wrapper, ModeSwitcher, StyledHeader } from './header.styled'

import { useTheme } from '@/app/providers'
import { Container } from '@/shared/ui'

type PropsType = {}
export const Header: FC<PropsType> = ({}) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Title to="/">Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
            <span>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}
