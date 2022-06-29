// STYLES
import "./MainTabItem.css";

const MainTabItem = (props) => {
    const {data, activeTab, setActiveTab} = props;
    const {id, icon, title} = data;

    const handleClick = () => {
        setActiveTab(id)
    }

    return (
        <li className={`mainTabItem ${activeTab === id && "active"}`} onClick={handleClick}>
            <i className={icon}></i>
            {title}
        </li>
    );
};

export default MainTabItem;