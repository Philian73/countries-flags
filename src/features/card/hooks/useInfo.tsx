import { useEffect, useState } from 'react'

import { Tag } from '../ui/info/info.styled'

import { cardsAPI } from '@/features/card/api'
import { CountryType } from '@/features/card/model'

export const useInfo = ({
  name,
  currencies,
  languages,
  tld,
  region,
  subregion,
  flags,
  flag,
  population,
  capital,
  borders,
}: CountryType) => {
  const [neighbors, setNeighbors] = useState<string[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        if (borders && borders.length) {
          const response = await cardsAPI.getCountryByCode(borders)
          const countries = response.data

          setNeighbors(countries.map(country => country.name.common))
        }
      } catch (error) {
        console.warn(error)
      }
    })()
  }, [borders])

  const values = {
    name: name.common,
    img: flags.svg,
    nativeName: name.nativeName
      ? Object.values(name.nativeName)
          .map(nativeName => nativeName.common)
          .join(', ')
      : '',
    population,
    region,
    subregion,
    capital: capital ? capital.join(', ') : '',
    flag,
    tld: tld.join(' ; '),
    currency: currencies ? `${Object.values(currencies)[0].name} (${Object.keys(currencies)})` : '',
    languages: languages ? Object.values(languages).join(', ') : '',
    borders,
  }

  const neighborsMap = borders
    ? neighbors.map(neighbor => (
        <Tag key={neighbor} to={`/country/${neighbor}`}>
          {neighbor}
        </Tag>
      ))
    : []

  return { values, neighborsMap }
}
