import { FC, useEffect, useState } from 'react'

import { Card } from '@/features/card'
import { cardsAPI } from '@/features/card/api'
import { CountryType, InfoType } from '@/features/card/model'
import { Controls } from '@/features/controls'
import { List } from '@/shared/ui'

type PropsType = {}
export const HomePage: FC<PropsType> = ({}) => {
  const [countries, setCountries] = useState<CountryType[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await cardsAPI.getAllCards()
        const countries = response.data

        setCountries(countries)
      } catch (e) {
        console.warn(e)
      }
    })()
  }, [])

  const countriesMap = countries.map(country => {
    const countryInfo: CountryInfoType = {
      img: country.flags.svg,
      title: country.name.common,
      info: [
        {
          title: 'Population',
          description: country.population.toLocaleString(),
        },
        {
          title: 'Region',
          description: country.region,
        },
        {
          title: 'Capital',
          description: country.capital.join(', '),
        },
      ],
    }

    return <Card key={country.name.common} {...countryInfo} />
  })

  return (
    <>
      <Controls />
      <List>{countriesMap}</List>
    </>
  )
}

// TYPES
type CountryInfoType = {
  img: string
  title: string
  info: InfoType[]
}
