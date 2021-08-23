import { DefaultTheme } from "styled-components"
import { surface, black, white, primary, secondary, grey } from './variables'

export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      surface: surface,
      black: black,
      white: white,
      grey: grey,
    },
    primary: {
      main: primary,
      contrastText: white
    },
    secondary: {
      main: secondary,
      contrastText: white
    }
  }
}


export default defaultTheme
