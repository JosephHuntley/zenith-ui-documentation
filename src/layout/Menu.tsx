import React from "react"
import { Container, Drawer, Portal, Text } from "zenith-ui"
import { Components } from "data/Constants"
import { useRouter } from "next/router"

export type MenuProps = {
  isOpen: boolean
  setIsOpen: Function
}

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
  const router = useRouter()

  return (
    <Portal>
      <Drawer
        isOpen={isOpen}
        top={"8rem"}
        md={{
          size: { height: "calc(100vh - 8rem)", width: "75vw" },
          padding: { x: "3rem" },
        }}
        sm={{ size: { height: "calc(100vh - 8rem)", width: "100vw" } }}
        xs={{ size: { height: "calc(100vh - 8rem)", width: "100vw" } }}
      >
        {Components.map((data) => (
          <Container
            flex={{ gap: ".5rem", direction: "column" }}
            key={data.category}
          >
            <Text
              variant="h2"
              md={{ font: { size: "5.5rem" }, margin: { top: "1rem" } }}
              sm={{ font: { size: "4rem" } }}
            >
              {data.category}
            </Text>
            {data.items.map((title) => (
              <Container
                className="cursor"
                key={title}
                onClick={() => router.push(`/docs/${title.toLowerCase()}`)}
              >
                <Text
                  md={{ font: { size: "4rem" } }}
                  sm={{ font: { size: "3rem" } }}
                >
                  {title}
                </Text>
              </Container>
            ))}
          </Container>
        ))}
      </Drawer>
    </Portal>
  )
}

export default Menu
