import { ZenithProvider, useDarkMode } from "zenith-ui"
import { ReactNode, useEffect } from "react"
import light from "../themes/default"
import dark from "../themes/dark"

export type ThemeType = {
  theme: {
    fonts: {
      title: string
      main: string
    }
    colors: {
      bg_primary: string
      bg_secondary: string
      bg_white: string
      text_primary: string
      text_secondary: string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}

const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, themeToggler] = useDarkMode()

  const mode = theme === "light" ? light : dark

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark-mode")
      document.documentElement.classList.add("light-mode")
    } else {
      document.documentElement.classList.remove("light-mode")
      document.documentElement.classList.add("dark-mode")
    }
  }, [theme])

  return <ZenithProvider value={mode}>{children}</ZenithProvider>
}

export default Theme
