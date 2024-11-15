import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import settings from "../assets/images/settings.png"

export default function Settings() {
    // Using curly braces to directly access the values from ThemeContext because it holds everything.
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const settingsStyles = {
        backgroundColor: isDarkMode? "#333" : "#fff",
        color: isDarkMode ? " #fff" : "#000"
    }
    return (
        <div class="settings-app" style={settingsStyles}>
            <img src={settings} alt="piggy bank" class="settings-img" />
            <h2>Settings</h2>
            <br></br>
            <button class="mode-btn" onClick = {toggleTheme} >
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}
