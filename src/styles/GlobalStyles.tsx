import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import AktivGrotesk from "../assets/fonts/AktivGroteskVF.ttf";
import AktivGroteskBlk from "../assets/fonts/AktivGroteskBlk.ttf";
import AktivGroteskCdMd from "../assets/fonts/AktivGroteskCdMd.ttf";
import AktivGroteskBd from "../assets/fonts/AktivGroteskBd.ttf";

const GlobalStyles = createGlobalStyle`
    ${normalize}

    @font-face {
    font-family: "Aktiv Grotesk CdMd";
    src: url(${AktivGroteskCdMd}) format('truetype');
    };

    @font-face {
    font-family: "Aktiv Grotesk Bd";
    src: url(${AktivGroteskBd}) format('truetype');
    };

    @font-face {
    font-family: "Aktiv Grotesk Blk";
    src: url(${AktivGroteskBlk}) format('truetype');
    };

    @font-face {
    font-family: "Aktiv Grotesk VF";
    src: url(${AktivGrotesk}) format('truetype');
    };

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    
    &::-webkit-scrollbar {
        display: none;
    }
  }
`;

export default GlobalStyles;
