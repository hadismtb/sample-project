import { useState } from "react";

//COMPONENTS
import SearchBox from "../shared/SearchBox";

const Settings = () => {
    const [shownContent, setShownContent] = useState("default");

    return (
        <div className='settings'>
            <nav className="settingsNav">
                <SearchBox/>
            </nav>
        </div>
    );
};

export default Settings;