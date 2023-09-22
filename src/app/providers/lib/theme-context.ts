import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const ThemeContext = createContext<ThemeContextPropsType>({
  theme: Theme.DARK,
  setTheme: () => {},
})

// TYPES
export type ThemeContextPropsType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
