import { useState } from 'react';

const SearchBox = (props) => {
    const {setActiveTab, setSearchContent} = props;

    const [inputValue, setInputValue] = useState("");

    return (
        <div className='searchBox'>
            <form id='search'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="search"/>
            </form>
        </div>
    );
};

export default SearchBox;