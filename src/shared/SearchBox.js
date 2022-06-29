import { useState } from 'react';

const SearchBox = (props) => {
    const {setActiveTab, setSearchContent} = props;

    const [inputValue, setInputValue] = useState("");

    //FUNCTIONS
    const handleChange = e => {
        const target = e.target;
        setInputValue(target.value);
        setSearchContent(target.value);
        if(target.value.trim()) {
            setActiveTab(target.parentElement.id);
        }
    }

    const handleSubmit = e => {
        const target = e.target;
        console.log(inputValue)
        e.preventDefault();
        if(inputValue.trim()) {
            setActiveTab(target.id);
            setSearchContent(inputValue);
        }
        setInputValue("");
    }

    return (
        <div className='searchBox'>
            <form id='search' onSubmit={handleSubmit}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="search" value={inputValue} onChange={handleChange}/>
            </form>
        </div>
    );
};

export default SearchBox;