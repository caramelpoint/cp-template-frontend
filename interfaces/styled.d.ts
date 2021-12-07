// styled.d.ts
import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        surface: string
        black: string
        white: string
        grey: string
      }
      primary: IPalette
      secondary: IPalette
    }
  }
}
