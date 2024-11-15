import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Pages/ThemeContext";


export default function Navbar() {
    const { isDarkMode } = useContext(ThemeContext);

    const navbarStyles = {
        backgroundColor: isDarkMode ? "#171f26" : "#5F7F98",
        color: isDarkMode ? "#fff" : "#fff"
    };

    return (
        <div class="navbar" style={navbarStyles}>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Expenses">Expenses</Link>
                <Link to="/Budget">Budget</Link>
                <Link to="/Report">Report</Link>
                <Link to="/Settings">Settings</Link>
        </div>
    )
}
