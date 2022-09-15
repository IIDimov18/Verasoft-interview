import { FaRegStar } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../dashboard/reducers/rootReducer";
import {useEffect, useState} from "react";
import {fetchOrderRequest} from "../dashboard/actions";
import LoadingScreen from "./FullPageLoader";

const Header = () => {
    const [newOrder, setNewOrder] = useState(false);

    const changeOrderState = () => {
        setNewOrder(current => !current);
    }



    return (
        <div>
            <LoadingScreen isVisible={newOrder} functionality={changeOrderState} />
            <div className="header">
                <FaRegStar  className="header-star"/>
                <text className="header-name">Joseph Smith</text>
                <button className="header-button" onClick={changeOrderState}>New Order</button>
            </div>
        </div>
    )
}

export default Header
