import { FC, useLayoutEffect, useState } from 'react'

import { Title, Wrapper, ModeSwitcher, StyledHeader } from './header.styled'

import { Container, Icon } from '@/shared/ui'

type PropsType = {}
export const Header: FC<PropsType> = ({}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            <Icon id="moon" fill={theme === 'dark' ? 'currentColor' : 'none'} />{' '}
            <span>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </StyledHeader>
  )
}
