import { FaRegUser } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaRegEnvelope } from 'react-icons/fa'
type PersonalInfoType={
    id:number,
    home_phone:string,
    mobile_phone:string,
    work_phone:string,
    email:string
}

const PersonalInfo = ({id,mobile_phone,work_phone,home_phone,email}:PersonalInfoType) => {

    return (
        <div className="personal-info">
            <div className="row">
                <FaRegUser className="big-margin icon"/>
                <text>#{id}</text>
            </div>
            <div className="row">
                <FaPhoneAlt className="big-margin icon"/>
                <text>{mobile_phone}</text>
            </div>
            <div className="row">
                <FaRegBuilding className="small-margin icon"/>
                <text>{work_phone}</text>
            </div>
            <div className="row">
                <FaHome className="small-margin icon"/>
                <text>{home_phone}</text>
            </div>
            <div className="row">
                <FaRegEnvelope className="small-margin icon"/>
                <text>{email}</text>
            </div>
        </div>
    )
}

export default PersonalInfo
