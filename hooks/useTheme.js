import { useState } from "react"
import { ThemeProvider } from "styled-components"
import themes from "../styles/themes"

const useTheme = () => {
  const defaultTheme = themes.light

  const [theme, setThemeState] = useState(defaultTheme)

  const setTheme = (theme = "light") => {
    const newTheme = themes[theme]
    setThemeState(newTheme)
  }

  return { theme, setTheme, ThemeProvider }
}

export default useTheme
