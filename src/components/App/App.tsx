import { ThemeProvider as StyledProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../../utils/Global";
import { defaultTheme, darkTheme } from "../../utils/themes";
import { Layout } from "../Layout/Layout";
import { useThemeContext } from "../../context/ThemeContext";

const App = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <>
      <StyledProvider theme={isDarkMode ? darkTheme : defaultTheme}>
        <Normalize />
        <GlobalStyle />
        <Layout />
      </StyledProvider>
    </>
  );
};

export default App;
