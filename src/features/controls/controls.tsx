import { FC, useEffect, useState } from 'react'

import { Wrapper } from './controls.styled'

import { Search, CustomSelect } from './'

const options: OptionType[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

type PropsType = {
  onSearch: (search: string, region: string) => void
}
export const Controls: FC<PropsType> = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState<unknown>('')

  useEffect(() => {
    const regionValue = (region as { value?: string; label?: string })?.value || ''

    onSearch(search, regionValue)
  }, [search, region])

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  )
}

type OptionType = {
  value: string
  label: string
}
