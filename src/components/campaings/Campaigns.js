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

                </ul>
            </nav>
        </div>
    );
};

export default Campaigns;