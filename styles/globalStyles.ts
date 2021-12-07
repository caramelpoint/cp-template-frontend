import { black } from './variables'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
        color: ${(props) => props.theme.palette.common.white};
        background-color:${(props) => props.theme.palette.common.black};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 16px;
    }

    a {
        color: inherit;
        text-decoration: none;
        width: inherit;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
    }

    // Font Example
    /* @font-face {
        font-family: "GT Haptik";
        src: url("/fonts/GT-Haptik-Regular.ttf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    } */

    // CSS Variables
    :root {
    }
`

export default GlobalStyle
