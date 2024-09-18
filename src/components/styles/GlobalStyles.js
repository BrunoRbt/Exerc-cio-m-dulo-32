import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
        line-height: 1.6;
        transition: background-color 0.3s, color 0.3s;
    }

    h1, h2 {
        color: #4caf50;
    }

    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }
`;

export default GlobalStyles;