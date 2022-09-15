import {FaRegUser} from "react-icons/fa";

type SmsCarrierType={
    since:string,
    status:string
}

const SmsCarrier = ({since,status}:SmsCarrierType) => {
    let date = new Date(since)
    let month = date.toLocaleString('default', { month: 'short' });
    let day = date.getDay()
    let final = month.toUpperCase()+' '+day+', '+date.getFullYear()

    return (
        <div className="sms-carrier">
            <div className="sms-info">
                <text className="sms-header">SMS CARRIER STATUS</text>
                <text className="sms-provider">{status}</text>
            </div>
            <div className="sms-since">
                <text className="sms-date">SINCE {final}</text>
            </div>
        </div>
    )
}

export default SmsCarrier
