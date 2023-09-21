import { Navigate, Route, Routes } from 'react-router-dom'

import { Details } from '@/pages/details'
import { HomePage } from '@/pages/home'
import { NotFound } from '@/pages/not-found'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main'

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />

          <Route path="/404" element={<NotFound />} />

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Main>
    </>
  )
}
