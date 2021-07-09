import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../constants/theme";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
};
export default App;

const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: 'Poppins', 'Open-Sans', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      color: ${({ theme }) => theme.dark};
      background-color: white;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
    }

    *, :after, :before {
      box-sizing: border-box;
    }
`;
