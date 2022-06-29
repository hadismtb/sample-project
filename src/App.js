import { useState } from "react";

//COMPONENTS
import MainTabItem from "./components/Main/MainTabItem";

//DATA
import { mainTabData } from "./data/mainData";

function App() {
    const [activeTab, setActiveTab] = useState("");

  return (
    <div className="app">
        <ul className="mainTabs">
            {mainTabData.map(item => <MainTabItem key={item.id} data={item} activeTab={activeTab} setActiveTab={setActiveTab} />)}
        </ul>
        <div className="mainOutput">

        </div>
    </div>
  );
}

export default App;
