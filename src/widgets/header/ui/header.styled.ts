import { styled } from 'styled-components'

export const StyledHeader = styled.header`
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
`

export const Title = styled.a.attrs({
  href: '/',
})`
  font: var(--font-small-800);
`

export const ModeSwitcher = styled.button`
  font: var(--font-small-800);

  display: flex;
  align-items: center;
  gap: 0.5em;

  span {
    text-transform: capitalize;
  }
`
