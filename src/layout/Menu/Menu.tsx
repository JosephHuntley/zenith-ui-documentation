import React, { useState } from "react"
import { Drawer } from "zenith-ui"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Drawer isOpen={isOpen} sm={{ margin: { m: "0" } }}>
      This is a test
    </Drawer>
  )
}

export default Menu
