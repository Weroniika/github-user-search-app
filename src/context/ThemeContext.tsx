import { createContext, useContext, useState } from "react";
import { darkTheme } from "../utils/themes";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleIsDarkMode?: () => void;
};

const ThemeContext = createContext<ThemeContextType>({ isDarkMode: false });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleIsDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("Theme context must be used within a SliderProvider");
  return context;
};
