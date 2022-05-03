import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { SearchProvider } from "./context/SearchContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SearchProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SearchProvider>
  </React.StrictMode>
);
