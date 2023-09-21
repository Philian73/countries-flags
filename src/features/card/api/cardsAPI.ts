import { CountryType } from '@/features/card/model'
import { baseInstance } from '@/shared/api'

export const cardsAPI = {
  getAllCards() {
    return baseInstance.get<CountryType[]>('all?fields=name,capital,flags,population,region')
  },
}
