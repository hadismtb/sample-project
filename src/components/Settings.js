import { useState } from "react";

//COMPONENTS
import SearchBox from "../shared/SearchBox";
import SearchContent from "../shared/SearchContent";

const Settings = () => {
    const [shownContent, setShownContent] = useState("default");
    const [searchContent, setSearchContent] = useState("");

    return (
        <div className='settings'>
            <nav className="settingsNav">
                <SearchBox setActiveTab={setShownContent} setSearchContent={setSearchContent} />
            </nav>
            <div className="settingsOutput">
                {
                    shownContent === "default" ? <p className='settingsTitle'>Settings</p> :
                        <SearchContent content={searchContent}/>
                }
            </div>
        </div>
    );
};

export default Settings;