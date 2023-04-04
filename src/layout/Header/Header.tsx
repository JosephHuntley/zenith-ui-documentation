import React from "react"
import { Box, Text } from "zenith-ui"
import styles from "./Header.module.css"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()
  return (
    <header>
      <Box
        className={styles.header}
        size={{ width: "100%", height: "15vh" }}
        flex={{ direction: "row", gap: "1rem" }}
        padding={{ p: "1.5rem" }}
      >
        <Text
          variant="p"
          font={{ size: "4rem" }}
          onClick={() => router.push("/")}
        >
          Zenith-UI
        </Text>
      </Box>
    </header>
  )
}

export default Header
