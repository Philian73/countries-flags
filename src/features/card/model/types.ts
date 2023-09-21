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
  [key: string]: NameType
}

export type CountryType = {
  capital?: string[]
  flag: string
  flags: FlagType
  name: NameType & {
    nativeName: NativeNameType
  }
  population: number
  region: string
  subregion: string
  tld: string[]
  currencies?: {
    [key: string]: { name: string; symbol: string }
  }
  languages: {
    [key: string]: string
  }
  borders?: string[]
}

export type InfoType = {
  title: string
  description: string
}
