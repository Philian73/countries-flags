import { useState } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { CountryType } from '@/features/card/model'
import { Details } from '@/pages/details'
import { HomePage } from '@/pages/home'
import { NotFound } from '@/pages/not-found'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main'

export const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<HomePage countries={countries} setCountries={setCountries} />}
          />
          <Route path="/country/:name" element={<Details />} />

          <Route path="/404" element={<NotFound />} />

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Main>
    </>
  )
}
