import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html,
    body {
        color: ${(props) => props.theme.colors.text};
        background-color: ${(props) => props.theme.colors.body};
        
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    // CSS Variables
    :root {
    }
`

export default GlobalStyle
