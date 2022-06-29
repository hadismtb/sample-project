import React from 'react';

const MainTabItem = (props) => {
    const {data} = props;
    const {id, icon, title} = data;

    return (
        <li>
            <i className={icon}></i>
            {title}
        </li>
    );
};

export default MainTabItem;