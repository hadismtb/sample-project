import { useContext } from "react";

//CONTEXT
import {ThemeContext} from "../context/ThemeContextProvider";


const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div>
            
        </div>
    );
};

export default ThemeToggle;