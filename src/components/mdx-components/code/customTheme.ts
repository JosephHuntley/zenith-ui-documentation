// @flow
// Converted automatically using ./tools/themeFromVsCode
// Based on Ayu Mirage
import { PrismTheme } from "prism-react-renderer"

export const theme: PrismTheme = {
  plain: {
    color: "#cccac2",
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgba(184, 207, 230, 0.5)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "symbol"],
      style: {
        color: "rgb(213, 255, 128)",
      },
    },
    {
      types: ["char", "constant"],
      style: {
        color: "rgb(149, 230, 203)",
      },
    },
    {
      types: ["number", "builtin"],
      style: {
        color: "rgb(223, 191, 255)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(204, 202, 194)",
      },
    },
    {
      types: ["operator", "punctuation"],
      style: {
        color: "rgba(92, 207, 230, 0.4)",
      },
    },
    {
      types: ["function", "attr-name"],
      style: {
        color: "rgb(255, 209, 115)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(92, 207, 230)",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(135, 217, 108)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(128, 191, 255)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(242, 121, 131)",
      },
    },
  ],
}
