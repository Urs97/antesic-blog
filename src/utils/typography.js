import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.baseFontSize = "18px"
oceanBeachTheme.baseLineHeight = "1.60"
oceanBeachTheme.bodyWeight = "300"
oceanBeachTheme.bodyGray = "9"

oceanBeachTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  a: {
    backgroundImage: "none",
    textShadow: "none",
  },
  hr: {
    background: "none",
  },
  blockquote: {
    borderColor: "#2EA3F2 !important",
    marginLeft: "0 !important",
  },
})

const typography = new Typography(oceanBeachTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
