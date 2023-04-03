import { ZenithProvider, useDarkMode } from "zenith-ui"
import { ReactNode, useEffect } from "react"

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

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark-mode")
      document.documentElement.classList.add("light-mode")
    } else {
      document.documentElement.classList.remove("light-mode")
      document.documentElement.classList.add("dark-mode")
    }
  }, [theme])

  return <ZenithProvider>{children}</ZenithProvider>
}

export default Theme
