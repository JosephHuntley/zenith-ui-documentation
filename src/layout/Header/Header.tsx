import React, { useContext, useState } from "react"
import { Box, Container, Portal, Text, useDarkMode } from "zenith-ui"
import styles from "./Header.module.css"
import { useRouter } from "next/router"
import { AiFillGithub } from "react-icons/ai"
import { CiSun } from "react-icons/ci"
import { BsMoonFill } from "react-icons/bs"
import { ThemeContext } from "../../styles/Theme"
import Menu from "../Menu"
import { Divide as Hamburger } from "hamburger-react"
import Search from "../Search"

type HeaderProps = {
  isMenu: boolean
  setIsMenu?: Function
}

const Header = ({ isMenu, setIsMenu }: HeaderProps) => {
  const { theme, themeToggler } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

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
        {!isMenu ? <Search /> : <></>}
        <Container flex={{ gap: "1rem" }}>
          <a
            href="https://github.com/JosephHuntley/zenith-ui"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className={styles.icon} />
          </a>
          {/* @ts-ignore */}
          <Container onClick={themeToggler}>
            {theme === "dark" ? (
              <BsMoonFill className={styles.icon} />
            ) : (
              <CiSun className={styles.icon} />
            )}
          </Container>
        </Container>
        {isMenu ? (
          <Container>
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          </Container>
        ) : (
          <></>
        )}
      </Box>
    </header>
  )
}

export default Header
