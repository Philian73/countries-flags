import { FC } from 'react'

import { Wrapper, InfoTitle, InfoImage, ListGroup, Meta, TagGroup } from './info.styled'

import { useInfo } from '@/features/card/hooks'
import { CountryType } from '@/features/card/model'

type PropsType = {
  country: CountryType
}
export const Info: FC<PropsType> = ({ country }) => {
  const { values, neighborsMap } = useInfo(country)

  return (
    <Wrapper>
      <InfoImage src={values.img} alt={values.name} />

      <div>
        <InfoTitle>{values.name}</InfoTitle>
        <ListGroup>
          <ul>
            <li>
              <b>Native Name: </b>
              <span>{values.nativeName}</span>
            </li>
            <li>
              <b>Population: </b>
              <span>{values.population}</span>
            </li>
            <li>
              <b>Region: </b>
              <span>{values.region}</span>
            </li>
            <li>
              <b>Sub Region: </b>
              <span>{values.subregion}</span>
            </li>
            <li>
              <b>Capital: </b>
              <span>{values.capital}</span>
            </li>
          </ul>
          <ul>
            <li>
              <b>Flag: </b>
              <span>{values.flag}</span>
            </li>
            <li>
              <b>Top Level Domain: </b>
              <span>{values.tld}</span>
            </li>
            <li>
              <b>Currency: </b>
              <span>{values.currency}</span>
            </li>
            <li>
              <b>Languages: </b>
              <span>{values.languages}</span>
            </li>
          </ul>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!values.borders ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>{neighborsMap}</TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  )
}
