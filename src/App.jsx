import React, { useEffect, useState } from "react";
import { Navbar } from "./components";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SongProvider } from "./context/SongContext";

function App() {

  const [theme,setTheme] = useState("winter");

  const darkTheme = () => {
    setTheme("dark");
  }

  const lightTheme = () => {
    setTheme("winter");
  }

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme","");
    document.querySelector("html").setAttribute("data-theme",theme);
  },[theme])


  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      <SongProvider value={{}}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </SongProvider>
    </ThemeProvider>
  );
}

export default App;
