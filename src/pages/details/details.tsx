import { FC, useEffect, useState } from 'react'

import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'

import { CountryType } from '@/features/card/model'
import { Info } from '@/features/card/ui'
import { baseInstance } from '@/shared/api'
import { Button } from '@/shared/ui'

type PropsType = {}
export const Details: FC<PropsType> = ({}) => {
  const { name } = useParams()

  const navigate = useNavigate()

  const [country, setCountry] = useState<CountryType | null>(null)

  useEffect(() => {
    baseInstance.get(`name/${name}`).then(({ data }) => setCountry(data[0]))
  }, [name])

  const handleGoBack = () => navigate(-1)

  return (
    <div>
      <Button onClick={handleGoBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info country={country} />}
    </div>
  )
}
