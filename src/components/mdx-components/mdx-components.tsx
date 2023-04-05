import { Text, Box } from "zenith-ui"
import * as components from "zenith-ui"
import CodeBlock from "./code/CodeBlock"

export const MDXComponents = {
  ...components,
  h1: (props: any) => <Text variant="h1" {...props} />,
  h2: (props: any) => <Text margin={{ y: "2rem" }} variant="h2" {...props} />,
  h3: (props: any) => <Text variant="h3" {...props} />,
  h4: (props: any) => <Text variant="h4" {...props} />,
  h5: (props: any) => <Text variant="h5" {...props} />,
  h6: (props: any) => <Text variant="h6" {...props} />,
  p: (props: any) => <Text {...props} />,
  pre: (props: any) => <CodeBlock {...props} />,
}
