import { FaRegUser } from 'react-icons/fa';
type GeneralInfoType={
    gender:string,
    birth_date:string
}

const GeneralInfo = ({gender,birth_date}:GeneralInfoType) => {
    let timeDiff = Math.abs(Date.now() - new Date(birth_date).getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

    return (
        <div className="general-info">
            <FaRegUser className="dashboard-icon"/>
            <text>{ gender.toUpperCase()} - {age}</text>
        </div>
    )
}

export default GeneralInfo
