import React, { useEffect, useState } from "react";
import { Navbar } from "./components";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SongProvider } from "./context/SongContext";

function App() {

  const [theme,setTheme] = useState(localStorage.getItem("theme") || "winter");

  const darkTheme = () => {
    setTheme("dark");
  }

  const lightTheme = () => {
    setTheme("winter");
  }

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme","");
    document.querySelector("html").setAttribute("data-theme",theme);
    if(theme) localStorage.setItem("theme",theme);
  },[theme])

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if(theme) setTheme(theme);
  },[])


  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      <SongProvider value={{}}>
        <div className="min-h-screen h-screen max-w-7xl w-full mx-auto">
          <Navbar />
          <Outlet />
        </div>
      </SongProvider>
    </ThemeProvider>
  );
}

export default App;
