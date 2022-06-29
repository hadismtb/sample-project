import { useState } from "react";

//DATA
import {campaignsTabData} from "../../data/campaignsData";

//COMPONENTS
import CampaignsTabItem from "./CampaignsTabItem";
import SearchBox from "../../shared/SearchBox";
import CampaignsContent from "./CampaignsContent";
import Hubspot from "./Hubspot";
import Google from "./Google";
import Pipedrive from "./Pipedrive";
import SearchContent from "../../shared/SearchContent";

const Campaigns = () => {
    const [activeTab, setActiveTab] = useState("");
    const [searchContent, setSearchContent] = useState("");

    return (
        <div className='campaigns'>
            <nav className="campaignsNav">
                <ul className="campaignsTabs">
                    {
                        campaignsTabData.map(item => <CampaignsTabItem key={item.id} data={item} setActiveTab={setActiveTab} activeTab={activeTab} />)
                    }
                </ul>
                <SearchBox setActiveTab={setActiveTab} setSearchContent={setSearchContent} />
            </nav>
            <div className="campaignsOutput">
                <CampaignsContent id="google" activeTab={activeTab}>
                    <Google />
                </CampaignsContent>
                <CampaignsContent id="hubspot" activeTab={activeTab}>
                    <Hubspot />
                </CampaignsContent>
                <CampaignsContent id="pipedrive" activeTab={activeTab}>
                    <Pipedrive />
                </CampaignsContent>
                {activeTab === "search" && <SearchContent content={searchContent}/>}
            </div>
        </div>
    );
};

export default Campaigns;