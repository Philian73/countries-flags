import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`

export const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const InfoTitle = styled.h1`
  font: var(--font-h1);
`

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`

export const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

export const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Tag = styled(Link)`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`
