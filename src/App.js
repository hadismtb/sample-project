//COMPONENTS
import MainTabItem from "./components/Main/MainTabItem";

//DATA
import { mainTabData } from "./data/mainData";

function App() {
  return (
    <div className="app">
        <ul className="mainTabs">
            <MainTabItem/>
        </ul>
    </div>
  );
}

export default App;
