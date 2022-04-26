import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 13px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }  
  
    body {
        font-family: ${primaryFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    

    @media only screen and (min-width: 48rem) {
        html {
          font-size: 16px;
        }
    }
`;
