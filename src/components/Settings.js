import React from 'react';

//COMPONENTS
import SearchBox from "../shared/SearchBox";

const Settings = () => {
    return (
        <div className='settings'>
            <nav className="settingsNav">
                <SearchBox/>
            </nav>
        </div>
    );
};

export default Settings;