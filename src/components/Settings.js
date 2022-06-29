import { useState } from "react";

//COMPONENTS
import SearchBox from "../shared/SearchBox";

const Settings = () => {
    const [shownContent, setShownContent] = useState("default");
    const [searchContent, setSearchContent] = useState("");

    return (
        <div className='settings'>
            <nav className="settingsNav">
                <SearchBox setActiveTab={setShownContent} setSearchContent={setSearchContent} />
            </nav>
            <div className="settingsOutput"></div>
        </div>
    );
};

export default Settings;