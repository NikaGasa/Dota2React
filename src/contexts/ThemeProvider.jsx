// import React from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";
// import { ThemeContext } from "./ThemeContext"; // 👈 Import the context from the new file

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useLocalStorage("theme", "light");

//   // This useEffect is better for applying the theme directly to the body
//   React.useEffect(() => {
//     document.body.className = ""; // Clear existing classes
//     document.body.classList.add(theme); // Add the current theme class
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
