import { useState } from "react";

//COMPONENTS
import MainTabItem from "./components/Main/MainTabItem";
import MainContent from "./components/Main/MainContent";
import Campaigns from "./components/campaings/Campaigns";
import Settings from "./components/Settings";
import ThemeToggle from "./components/ThemeToggle";

//DATA
import { mainTabData } from "./data/mainData";

//STYLE
import "./App.css";

//CONTEXT
import {ThemeContextProvider} from "./context/ThemeContextProvider";

function App() {
    const [activeTab, setActiveTab] = useState("");

  return (
    <ThemeContextProvider>
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
        <div className="switcher">
            <ThemeToggle/>
        </div>
    </ThemeContextProvider>
  );
}

export default App;
