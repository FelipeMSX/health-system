import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif
    }
    :root{
        --primary: #1b2330;
        --secondary: #252f3e;
        --tertiary: #2D3440;
        --quaternary: #3B4452;


        --white: #fff;
        --gray:#C0C2C5;
        --lightgray:#E2E2E2;
        --fontBlack:#111827;

    }
`;   