import {FaRegUser} from "react-icons/fa";

type ActivityType={
    sms:number,
    emails:number,
    orders:number
}

const Activity = ({sms,emails,orders}:ActivityType) => {

    return (
        <div className="activity">
            <div className="header">
                <text className="header-text">90-DAY COMMUNICATION ACTIVITY</text>
            </div>
            <div className="content">
                <div className="content-block">
                    <text className="number">{sms}</text>
                </div>

                <div className="content-block">
                    <text className="number">{emails}</text>
                </div>

                <div className="content-block">
                    <text className="number">{orders}</text>
                </div>

            </div>
            <div className="content">
                <div className="content-description">
                    <text className="description">SMS</text>
                </div>
                <div className="content-description">
                    <text className="description">EMAIL</text>
                </div>
                <div className="content-description">
                    <text className="description">ORDERS</text>
                </div>
            </div>
        </div>
    )
}

export default Activity
