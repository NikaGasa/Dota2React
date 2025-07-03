import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "src/hooks/useTheme.js";
import "src/styles/Header.scss";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/heroes">Heroes</NavLink>
        <NavLink to="/items">Items</NavLink>
      </nav>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;
