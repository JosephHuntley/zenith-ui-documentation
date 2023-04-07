import React, { ReactNode, useEffect, useState } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
import styles from "./Layout.module.css"
import { useWindowSize } from "zenith-ui"

const Layout = ({ children }: { children: ReactNode }) => {
  const [isMenu, setIsMenu] = useState(true)

  const windowSize = useWindowSize()

  useEffect(() => {
    setIsMenu(windowSize.width <= 1124)
  }, [windowSize])

  return (
    <div>
      <Header isMenu={isMenu} setIsMenu={setIsMenu} />
      {isMenu ? null : <Sidebar />}

      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default Layout
