import React, { useState, createContext } from "react";

// The create context returns an object with a provider 
export const ThemeContext = createContext();

// The provider component will wrap all the children prop which represents all our nested components needed to achieve dark mode everywhere.
export const ThemeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

// The prevMode is currently in light mode so when the button is triggered, it will switch to !prevMode and make the pages to be in dark mode.
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

// Rendering
    return (
// The current value is set to dark mode and will only be triggered by using the toggleTheme function to set the children components to dark mode.
        <ThemeContext.Provider value = {{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
