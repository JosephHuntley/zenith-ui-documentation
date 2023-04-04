const theme = {
  colors: {
    bg_primary: "#fff",
    bg_secondary: "#ccc",
    text_primary: "#101212",
    white: "#fff",
  },
  breakpoints: {
    xs: "screen and (max-width: 640px)",
    phone: "screen and (max-width: 768px)",
    tablet: "screen and (max-width: 1024px)",
    laptop: "screen and (max-width: 1280px)",
  },
  status: {
    success: { bg: "rgba(154, 230, 180, 0.36)", font: "#9AE6B4" },
    failure: { bg: "rgba(254, 178, 178, 0.36)", font: "#FEB2B2" },
    default: { bg: "rgba(226, 232, 240, 0.36)", font: "#E2E8F0" },
    new: { bg: "rgba(214, 188, 250, 0.46)", font: "#D6BCFA" },
  },
}
export default theme
