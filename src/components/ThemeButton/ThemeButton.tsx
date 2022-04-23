import { ReactComponent as IconMoon } from "../../assets/icon-moon.svg";
import { ReactComponent as IconSun } from "../../assets/icon-sun.svg";
import * as SC from "./ThemeButton.styles";
import { useThemeContext } from "../../context/ThemeContext";

export const ThemeButton = () => {
  const { isDarkMode, toggleIsDarkMode } = useThemeContext();

  return (
    <SC.ThemeButton onClick={toggleIsDarkMode}>
      <span>{isDarkMode ? "light" : "dark"}</span>
      {isDarkMode ? <IconSun /> : <IconMoon />}
    </SC.ThemeButton>
  );
};
