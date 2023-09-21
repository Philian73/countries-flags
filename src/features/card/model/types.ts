export type FlagType = {
  png: string
  svg: string
  alt: string
}

export type NameType = {
  common: string
  official: string
}

export type NativeNameType = {
  ara: NameType
  heb: NameType
}

export type CountryType = {
  capital: string[]
  flags: FlagType
  name: NameType & NativeNameType
  population: number
  region: string
}

export type InfoType = {
  title: string
  description: string
}
