import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../../utils/Global";
import { defaultTheme } from "../../utils/themes";
import { Layout } from "../Layout/Layout";

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Normalize />
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
