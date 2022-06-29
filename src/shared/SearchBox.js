import React from 'react';

const SearchBox = () => {
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