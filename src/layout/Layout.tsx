import React, { ReactNode } from "react"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout
