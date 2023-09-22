import { FC, ReactNode, useLayoutEffect, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/app/providers/lib/theme-context'

let defaultTheme: Theme

type PropsType = {
  children: ReactNode
  initialTheme?: Theme
}
export const ThemeProvider: FC<PropsType> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-theme', theme)
    }
    if (!initialTheme) {
      setTheme((localStorage?.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK)
    }
  }, [theme])

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
