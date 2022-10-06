import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchOrderRequest} from "../dashboard/actions";
import {RootState} from "../dashboard/reducers/rootReducer";
import OrdersList from "./orders/OrdersList"
import ErrorTab from "./orders/ErrorTab";


const Orders = () => {
    const dispatch = useDispatch();
    const {pending, orders} = useSelector(
        (state: RootState) => state.order
    );
    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, []);

    const [errorTab, setErrorTab] = React.useState(false);
    const [flag, setFlag] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const [tabs, setOrderTabs] = React.useState(["active", "inactive", "inactive", "inactive", "inactive"]);
    const changeTab = (index: number) => {
        let response: Array<string> = Array(5).fill('inactive');
        if (index != -1) {
            response[index] = 'active'
            setIndex(index);
            setErrorTab(false);
        }

        setOrderTabs(response);


    }

    if (orders[index] != undefined && !flag) {
        orders.map((order) => {
            if (order.sent != undefined) {
                setIndex(order.id);
                changeTab(order.id);
                setFlag(true);
            }
        })
    }
    return (

        <div>
            <>
                <div className="tabs-container">
                    <div className="tabs">
                        {orders != undefined ? orders.map((order) => {

                            return (
                                <div className={`tab ${tabs[order.id]}`} onClick={() => changeTab(order.id)}>
                                    <text>{order.key.replace("_", " ").toUpperCase()}</text>
                                </div>
                            )

                        }) : ""}
                    </div>
                </div>

                <hr className="orders-hr"/>
                <OrdersList orders={orders} index={index}/>
            </>
        </div>
    )
}

export default Orders
