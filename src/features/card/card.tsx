import { FC } from 'react'

import { Link } from 'react-router-dom'

import { Wrapper, CardBody, CardImage, CardList, CardListItem, CardTitle } from './card.styled'
import { InfoType } from './model'

type PropsType = {
  img: string
  title: string
  info: InfoType[]
}
export const Card: FC<PropsType> = ({ img, title, info = [] }) => {
  const infoMap = info.map(el => {
    return (
      <CardListItem key={el.title}>
        <b>{el.title}:</b> {el.description}
      </CardListItem>
    )
  })

  return (
    <Wrapper>
      <Link to={`country/${title}`}>
        <CardImage src={img} alt={title} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardList>{infoMap}</CardList>
        </CardBody>
      </Link>
    </Wrapper>
  )
}
