import { Text, Box } from "zenith-ui"
import * as components from "zenith-ui"

export const MDXComponents = {
  ...components,
  h1: (props: any) => <Text variant="h1" {...props} />,
  h2: (props: any) => <Text variant="h2" {...props} />,
  h3: (props: any) => <Text variant="h3" {...props} />,
  h4: (props: any) => <Text variant="h4" {...props} />,
  h5: (props: any) => <Text variant="h5" {...props} />,
  h6: (props: any) => <Text variant="h6" {...props} />,
  code: (props: any) => <Box font={{ size: "1rem" }} {...props} />,
}
