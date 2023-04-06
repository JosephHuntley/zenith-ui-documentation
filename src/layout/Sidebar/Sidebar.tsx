import React from "react"
import { Box, Container, Text } from "zenith-ui"
import { Components } from "../../../data/Constants"
import { useRouter } from "next/router"

const Sidebar = () => {
  const router = useRouter()
  return (
    <Box
      size={{ width: "15vw", height: "calc(100% - 7rem)" }}
      flex={{ direction: "column", gap: "2rem" }}
      position={{ position: "fixed", top: "7rem" }}
      padding={{ x: "1.5rem", y: "2rem" }}
    >
      {Components.map((data) => (
        <Container
          flex={{ gap: ".5rem", direction: "column" }}
          key={data.category}
        >
          <Text variant="h2">{data.category}</Text>
          {data.items.map((title) => (
            <div
              className="cursor"
              key={title}
              onClick={() => router.push(`/docs/${title.toLowerCase()}`)}
            >
              <Text>{title}</Text>
            </div>
          ))}
        </Container>
      ))}
    </Box>
  )
}

export default Sidebar
