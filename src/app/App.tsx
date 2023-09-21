import { HomePage } from '@/pages/home'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main'

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <HomePage />
      </Main>
    </>
  )
}
