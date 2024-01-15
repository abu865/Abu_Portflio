import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
  
    const handleToggleClick = () => {
      setShowMenu((prevShowMenu) => !prevShowMenu);
    };
  
    const value = {
      showMenu,
      handleToggleClick,
    };
  
    return (
      <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
    );
  };


export const useToggle = () => {
    const context = useContext(ToggleContext);
    if (!context) {
      throw new Error("useToggle must be used within a ToggleProvider");
    }
    return context;
  };