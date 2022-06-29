import { useContext } from "react";

//CONTEXT
import {ThemeContext} from "../context/ThemeContextProvider";

//IMAGES
import dark from "../assets/images/dark.png";
import light from "../assets/images/light.png";


const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div>
            <img src={theme === 'dark' ? dark : light} alt="theme icon"/>
        </div>
    );
};

export default ThemeToggle;