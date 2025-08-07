import React, { useEffect, useState } from "react";
import { Navbar } from "./components";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SongProvider } from "./context/SongContext";

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");
  const [mood, setMood] = useState("happy");

  const darkTheme = () => {
    setTheme("luxury");
  };

  const lightTheme = () => {
    setTheme("winter");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", "");
    document.querySelector("html").setAttribute("data-theme", theme);
    if (theme) localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
  }, []);

  const changeMood = (moodText) => {
    setMood(moodText);
    navigate("/track");
  };

  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <SongProvider value={{ mood, changeMood }}>
        <div className="min-h-screen h-screen max-w-7xl w-full mx-auto">
          <Navbar />
          <Outlet />
        </div>
      </SongProvider>
    </ThemeProvider>
  );
}

export default App;
