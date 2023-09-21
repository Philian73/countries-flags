import { FC } from 'react'

import { useParams } from 'react-router-dom'

type PropsType = {}
export const Details: FC<PropsType> = ({}) => {
  const params = useParams()

  return <div>Details {params.name}</div>
}
