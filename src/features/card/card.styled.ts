import { styled } from 'styled-components'

export const Wrapper = styled.article`
  cursor: pointer;
  overflow: hidden;
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
`

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`

export const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`

export const CardTitle = styled.h3`
  font: var(--font-medium-800);
`

export const CardList = styled.ul`
  padding: 1rem 0 0;
`

export const CardListItem = styled.li`
  font: var(--font-small-300);
  & > b {
    font: var(--font-small-800);
  }
`
