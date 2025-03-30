
import { createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
      breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      tokens: {
        colors: {
          red: "#EE0F0F",
        },
      },
      semanticTokens: {
        colors: {
          danger: { value: "{colors.red}" },
        },
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
    globalCss: {
        "html, body": {
          margin: 0,
          padding: 0,
        },
      },
  })
  


export default createSystem(config)