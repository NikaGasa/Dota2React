import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeContext } from "./ThemeContext"; 

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  // This useEffect is better for applying the theme directly to the body
  React.useEffect(() => {
    document.body.className = ""; 
    document.body.classList.add(theme); 
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
