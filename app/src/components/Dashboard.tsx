import { FaRegUser } from 'react-icons/fa';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonRequest } from "../dashboard/actions";
import { RootState } from "../dashboard/reducers/rootReducer";
import GeneralInfo from './dashboard/GeneralInfo';
import  PersonalInfo from './dashboard/PersonalInfo'
import Activity from "./dashboard/Activity";
import SmsCarrier from "./dashboard/SmsCarrier";

const Dashboard = () => {
    const dispatch = useDispatch();
    const {pending, person } = useSelector(
        (state: RootState) => state.person
    );

    useEffect(() => {
        dispatch(fetchPersonRequest());
    }, []);
    return (

        <div >
            {typeof person['id'] !="undefined" ?(
                <div className="dashboard">
                    < GeneralInfo gender={person["gender"]} birth_date={person["birth_date"]} />
                    <PersonalInfo id={person['id']} home_phone={person['home_phone']} email={person['email']} mobile_phone={person['mobile_phone']} work_phone={person['work_phone']}/>
                    <Activity sms={person['activity']['sms']} emails={person['activity']['email']} orders={person["activity"]["orders"]}/>
                    <SmsCarrier since={person["carrier_status"]["since"]} status={person["carrier_status"]["status"]}/>
                </div>



            ) :<div></div> }
        </div>
    )
}

export default Dashboard
