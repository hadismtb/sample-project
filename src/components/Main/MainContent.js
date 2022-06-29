const MainContent = (props) => {
    const {activeTab, id, children} = props;

    return (
        activeTab === id && children
    )
};

export default MainContent;