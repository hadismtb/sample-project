import { useState } from "react";

//DATA
import {campaignsTabData} from "../../data/campaignsData";

//COMPONENTS
import CampaignsTabItem from "./CampaignsTabItem";

const Campaigns = () => {
    const [activeTab, setActiveTab] = useState("");

    return (
        <div className='campaigns'>
            <nav className="campaignsNav">
                <ul className="campaignsTabs">
                    {
                        campaignsTabData.map(item => <CampaignsTabItem key={item.id} data={item} setActiveTab={setActiveTab} activeTab={activeTab} />)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Campaigns;