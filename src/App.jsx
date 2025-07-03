import React from "react";
import AppRouter from "./routes/AppRouter";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <main className={`main-container ${isHome ? 'no-padding' : ''}`}>
            <AppRouter />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
