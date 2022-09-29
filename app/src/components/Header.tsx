import { FaRegStar } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../dashboard/reducers/rootReducer";
import {useEffect, useState} from "react";
import {fetchOrderRequest, fetchPersonRequest} from "../dashboard/actions";
import LoadingScreen from "./FullPageLoader";

const Header = () => {
    const [newOrder, setNewOrder] = useState(false);

    const changeOrderState = () => {
        setNewOrder(current => !current);
    }
    const dispatch = useDispatch();
    const {pending, person } = useSelector(
        (state: RootState) => state.person
    );

    useEffect(() => {
        dispatch(fetchPersonRequest());
    }, []);


    return (
        <div>
            <LoadingScreen isVisible={newOrder} functionality={changeOrderState} />
            <div className="header">
                <FaRegStar  className="header-star"/>
                <text className="header-name">{person["first_name"]} {person["last_name"]}</text>
                <button className="header-button" onClick={changeOrderState}>New Order</button>
            </div>
        </div>
    )
}

export default Header
