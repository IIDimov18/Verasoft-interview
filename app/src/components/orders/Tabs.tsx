// type GeneralInfoType={
//     gender:string,
//     birth_date:string
// }
interface tabs {
    tabs: string[]
}
const Tabs = (tabs:tabs) => {
    return (
        <div className="tabs-container">
            <div className="tabs">
                <div className={`tab ${tabs.tabs[0]}`}>
                    <text>orders A</text>
                </div>
                <div className={`tab ${tabs.tabs[1]}`}>
                    <text>orders AA</text>
                </div>
                <div className={`tab ${tabs.tabs[2]}`}>
                    <text>orders AAA</text>
                </div>
                <div className={`tab ${tabs.tabs[3]}`}>
                    <text>orders B</text>
                </div>
                <div className={`tab ${tabs.tabs[4]}`}>
                    <text>orders C</text>
                </div>


            </div>
        </div>
    )
}

export default Tabs
