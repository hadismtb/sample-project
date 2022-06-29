import React from 'react';

const CampaignsTabItem = (props) => {
    const {data,setActiveTab, activeTab} = props;
    const {title, id, icon} = data;

    //FUNCTION
    const handleClick = () => {
        setActiveTab(id)
    }

    return (
        <li onClick={handleClick} className={`${activeTab === id && "active"} campaginTabItem`}>
            <img src={icon} alt={title} />
            {title}
        </li>
    );
};

export default CampaignsTabItem;