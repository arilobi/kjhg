import React from "react";
import { Link } from "react-router-dom";
// This is for the dark mode to work in the navbar as well
import { ThemeContext } from "../Pages/ThemeContext";

import { useContext } from "react";

export default function Footer() {
    // UseContext is a hook that returns an object containing values provided by ThemeContext.provider that includes the Dark mode feature
    // Using curly braces to destructure and directly access the object isDarkMode to toggle the theme
    const { isDarkMode } = useContext(ThemeContext);

    // Styles CSS specific for dark mode
    const footerStyles = {
        // #171f26 refers to color in dark mode while the other refers to light mode color
        backgroundColor: isDarkMode ? "#171f26" : "#5F7F98",
        // Text color
        color: isDarkMode ? "#fff" : "#fff"
    };

    return (
        // passing the footerStyles so that it renders it to what we want.
        <div class="footer" style={footerStyles}>
            <Link to="/Dashboard">Home</Link>
        </div>
    );
}
