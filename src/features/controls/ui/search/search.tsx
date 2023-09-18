import { ChangeEvent, FC } from 'react'

import { IoSearch } from 'react-icons/io5'

import { InputContainer, Input } from './search.styled'

type PropsType = {
  search: string
  setSearch: (search: string) => void
}
export const Search: FC<PropsType> = ({ search, setSearch }) => {
  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.currentTarget.value)

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={changeSearch} value={search} />
    </InputContainer>
  )
}
