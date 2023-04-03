import React from "react"
import { Box, Container } from "zenith-ui"
import { Components } from "../../../data/Constants"

const Sidebar = () => {
  return (
    <Box
      size={{ width: "25vw", height: "100%" }}
      flex={{ direction: "column", gap: "1rem" }}
      position={{ position: "relative" }}
      padding={{ p: "1rem" }}
    >
      {Components.map((data) => (
        <div key={data.category}>
          {data.category}
          {data.items.map((title) => (
            <div key={title}>{title}</div>
          ))}
        </div>
      ))}
    </Box>
  )
}

export default Sidebar
