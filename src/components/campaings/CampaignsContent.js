const CampaignsContent = (props) => {
    const {id, activeTab, children} = props;

    return (
        activeTab === id && children
    );
};

export default CampaignsContent;