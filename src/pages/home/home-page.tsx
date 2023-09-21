import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import { Card } from '@/features/card'
import { cardsAPI } from '@/features/card/api'
import { CountryType, InfoType } from '@/features/card/model'
import { Controls } from '@/features/controls'
import { List } from '@/shared/ui'

type PropsType = {
  countries: CountryType[]
  setCountries: Dispatch<SetStateAction<CountryType[]>>
}
export const HomePage: FC<PropsType> = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState<CountryType[]>(countries)

  useEffect(() => {
    if (!countries.length) {
      ;(async () => {
        try {
          const response = await cardsAPI.getAllCards()
          const countries = response.data

          setCountries(countries)
          setFilteredCountries(countries)
        } catch (e) {
          console.warn(e)
        }
      })()
    }
  }, [])

  const handleSearch = (search: string, region: string) => {
    let data = [...countries]

    if (region) {
      data = data.filter(country => country.region.includes(region))
    }

    if (search) {
      data = data.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    }

    setFilteredCountries(data)
  }

  const countriesMap = filteredCountries.map(country => {
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
      <Controls onSearch={handleSearch} />
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
