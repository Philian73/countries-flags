import { useState } from 'react'

import { Search } from './'

export const Controls = ({}) => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
    </div>
  )
}
