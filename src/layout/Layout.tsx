import React, { ReactNode } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"
import styles from "./Layout.module.css"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default Layout
