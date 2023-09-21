import { styled } from 'styled-components'

export const InputContainer = styled.label`
  width: 100%;

  background-color: var(--colors-ui-base);

  margin-bottom: 1.5rem;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

export const InputSearch = styled.input.attrs({
  type: 'search',
  placeholder: 'Search...',
})`
  font: var(--font-small-600);
  margin-left: 2rem;
  color: var(--colors-text);
  background-color: inherit;
`
