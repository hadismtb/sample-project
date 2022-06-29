import React from 'react';

const CampaignsTabItem = (props) => {
    const {data,setActiveTab, activeTab} = props;
    const {title, id, icon} = data;

    return (
        <li>
            <img src={icon} alt={title} />
            {title}
        </li>
    );
};

export default CampaignsTabItem;