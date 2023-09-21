import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const StyledHeader = styled.header`
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

export const Title = styled(Link).attrs({
  to: '/',
})`
  font: var(--font-small-800);
`

export const ModeSwitcher = styled.button`
  font: var(--font-small-800);
  text-transform: capitalize;

  display: flex;
  align-items: center;
  gap: 0.75em;
  min-width: 107.77px;
`
