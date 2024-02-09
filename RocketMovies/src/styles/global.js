import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    :root{
        font-size:62.5%;
    }
    body{
        background-color: ${({theme}) => theme.colors.background_base};
        color: ${({theme}) => theme.colors.white};
        -webkit-font-smoothing: antialised;
    }
    body, input, button, textarea{
        font-family: "Roboto slab", serif;
        font-size:16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:houver, a:houver{
        filter: brightness(0.9);
    }
`