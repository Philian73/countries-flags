import { FC } from 'react'

import { Wrapper, InfoTitle, InfoImage, List, ListGroup, ListItem } from './info.styled'

import { useInfo } from '@/features/card/hooks/useInfo'
import { CountryType } from '@/features/card/model'

type PropsType = {
  country: CountryType
}
export const Info: FC<PropsType> = ({ country }) => {
  const values = useInfo(country)

  return (
    <Wrapper>
      <InfoImage src={values.img} alt={values.name} />

      <div>
        <InfoTitle>{values.name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name: </b>
              <span>{values.nativeName}</span>
            </ListItem>
            <ListItem>
              <b>Population: </b>
              <span>{values.population}</span>
            </ListItem>
            <ListItem>
              <b>Region: </b>
              <span>{values.region}</span>
            </ListItem>
            <ListItem>
              <b>Sub Region: </b>
              <span>{values.subregion}</span>
            </ListItem>
            <ListItem>
              <b>Capital: </b>
              <span>{values.capital}</span>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Flag: </b>
              <span>{values.flag}</span>
            </ListItem>
            <ListItem>
              <b>Top Level Domain: </b>
              <span>{values.tld}</span>
            </ListItem>
            <ListItem>
              <b>Currency: </b>
              <span>{values.currency}</span>
            </ListItem>
            <ListItem>
              <b>Languages: </b>
              <span>{values.languages}</span>
            </ListItem>
          </List>
        </ListGroup>
      </div>
    </Wrapper>
  )
}
