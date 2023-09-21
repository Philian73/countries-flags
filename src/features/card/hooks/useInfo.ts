import { CountryType } from '@/features/card/model'

export const useInfo = ({
  name,
  currencies,
  languages,
  tld,
  region,
  subregion,
  flags,
  flag,
  population,
  capital,
}: CountryType) => {
  const values = {
    name: name.common,
    img: flags.svg,
    nativeName: Object.values(name.nativeName)
      .map(nativeName => nativeName.common)
      .join(', '),
    population,
    region,
    subregion,
    capital: capital ? capital.join(', ') : '',
    flag,
    tld: tld.join(' ; '),
    currency: currencies ? `${Object.values(currencies)[0].name} (${Object.keys(currencies)})` : '',
    languages: Object.values(languages).join(', '),
  }

  return values
}
