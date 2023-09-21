import { FC } from 'react'

import { Wrapper, CardBody, CardImage, CardList, CardListItem, CardTitle } from './card.styled'
import { InfoType } from './model'

type PropsType = {
  img: string
  title: string
  info: InfoType[]
  onClick?: any
}
export const Card: FC<PropsType> = ({ img, title, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardList>
          {info.map(el => {
            return (
              <CardListItem key={el.title}>
                <b>{el.title}:</b> {el.description}
              </CardListItem>
            )
          })}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}
