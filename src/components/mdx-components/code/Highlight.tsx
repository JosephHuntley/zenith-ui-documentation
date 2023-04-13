import BaseHighlight, { Language, defaultProps } from "prism-react-renderer"
import React from "react"
import { Container } from "zenith-ui"
import { theme } from "./customTheme"
import Styles from "./Code.module.css"

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  // @ts-ignore
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)))

  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    )
    return inRange
  }
}

interface HighlightProps {
  codeString: string
  language: Language
  metastring?: string
  showLines?: boolean
}

function Highlight({
  codeString,
  language,
  metastring,
  showLines,
  ...props
}: HighlightProps) {
  // @ts-ignore
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <BaseHighlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={Styles.overflow} data-language={language}>
          <pre className={`pre ${className} ${Styles.overflow}`} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              return (
                <Container
                  key={i}
                  padding={{ x: "5px" }}
                  color={
                    shouldHighlightLine(i)
                      ? "rgba(255, 255, 255, 0.08);"
                      : undefined
                  }
                  {...lineProps}
                >
                  {showLines && <span className={Styles.span}>{i + 1}</span>}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </Container>
              )
            })}
          </pre>
        </div>
      )}
    </BaseHighlight>
  )
}

export default Highlight
