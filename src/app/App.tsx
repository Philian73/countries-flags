import { Controls } from '@/features/controls/controls'
import { Header } from '@/widgets/header'
import { Main } from '@/widgets/main'

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  )
}
