import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent3 } from "react-icons/wi";

// dark | light theme toggler function

const Themetoggle = () => {

  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);

  return (
    <div className="nav_ac theme_toggler" onClick={themetoggle}>
      <WiMoonAltWaningCrescent3 />
    </div>
  );
};

export default Themetoggle;
