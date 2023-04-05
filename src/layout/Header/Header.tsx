import React, { useContext } from "react"
import { Box, Container, Text, useDarkMode } from "zenith-ui"
import styles from "./Header.module.css"
import { useRouter } from "next/router"
import { AiFillGithub } from "react-icons/ai"
import { CiSun } from "react-icons/ci"
import { BsMoonFill } from "react-icons/bs"
import { ThemeContext } from "../../styles/Theme"

const Header = () => {
  const { theme, themeToggler } = useContext(ThemeContext)
  const router = useRouter()
  return (
    <header className={styles.header}>
      <Box
        className={`${styles.header} cursor`}
        size={{ width: "100%", height: "100%" }}
        flex={{ direction: "row", justify: "space-between" }}
        padding={{ p: "1.5rem" }}
      >
        <Text
          variant="p"
          font={{ size: "4rem" }}
          onClick={() => router.push("/")}
          className="logo"
        >
          Zenith-UI
        </Text>
        <Container flex={{ gap: "1rem" }}>
          <AiFillGithub className={styles.icon} />
          {/* @ts-ignore */}
          <Container onClick={themeToggler}>
            {theme === "dark" ? (
              <BsMoonFill className={styles.icon} />
            ) : (
              <CiSun className={styles.icon} />
            )}
          </Container>
        </Container>
      </Box>
    </header>
  )
}

export default Header
