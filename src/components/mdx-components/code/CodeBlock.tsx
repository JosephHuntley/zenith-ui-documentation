import { ReactNode } from "react"
import { Box } from "zenith-ui"
import Highlight from "./Highlight"
import Styles from "./Code.module.css"

const CodeBlock = (props: any) => {
  const { children, ln } = props.children.props

  return (
    <Box
      position={{ position: "relative", z: "0" }}
      padding={{ bottom: "3rem" }}
    >
      <Box className={Styles.code_block} radius=".8rem" margin={{ y: "2rem" }}>
        <Highlight
          codeString={children.trim()}
          language={"jsx"}
          showLines={true}
          metastring={ln}
        />
      </Box>
    </Box>
  )
}

export default CodeBlock
