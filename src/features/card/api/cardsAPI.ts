import { CountryType } from '@/features/card/model'
import { baseInstance } from '@/shared/api'

export const cardsAPI = {
  getAllCards() {
    return baseInstance.get<CountryType[]>('all?fields=name,capital,flags,population,region')
  },
  getCountryByCode(codes: string[]) {
    return baseInstance.get<CountryType[]>(`alpha?codes=${codes.join(',')}`)
  },
}
