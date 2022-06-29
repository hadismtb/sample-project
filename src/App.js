import { useState } from "react";

//COMPONENTS
import MainTabItem from "./components/Main/MainTabItem";

//DATA
import { mainTabData } from "./data/mainData";
import MainContent from "./components/Main/MainContent";
import Campaigns from "./components/campaings/Campaigns";
import Settings from "./components/Settings";

function App() {
    const [activeTab, setActiveTab] = useState("");

  return (
    <div className="app">
        <ul className="mainTabs">
            {mainTabData.map(item => <MainTabItem key={item.id} data={item} activeTab={activeTab} setActiveTab={setActiveTab} />)}
        </ul>
        <div className="mainOutput">
            <MainContent id="campaigns" activeTab={activeTab}>
                <Campaigns/>
            </MainContent>
            <MainContent id="settings" activeTab={activeTab}>
                <Settings/>
            </MainContent>
        </div>
    </div>
  );
}

export default App;
