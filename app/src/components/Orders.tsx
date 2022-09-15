import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderRequest } from "../dashboard/actions";
import { RootState } from "../dashboard/reducers/rootReducer";
import Tabs from "./orders/Tabs";
import OrdersList from "./orders/OrdersList";
import GeneralInfo from "./dashboard/GeneralInfo";
import PersonalInfo from "./dashboard/PersonalInfo";
import Activity from "./dashboard/Activity";
import SmsCarrier from "./dashboard/SmsCarrier";
import BouncingDotsLoader from "./orders/BouncingDotsLoader";
import ErrorTab from "./orders/ErrorTab";


const Orders = () => {
    const dispatch = useDispatch();
    const {pending, orders } = useSelector(
        (state: RootState) => state.order
    );


    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, []);
    const [selectedOrder,setSelectedOrder] = React.useState(orders.orders_AAA)
    const [tabs,setOrderTabs]=React.useState(["inactive","inactive","active","inactive","inactive"]);
    const[errorTab , setErrorTab] = React.useState(false);
    const changeTab= (index:number) =>{
        let response:Array<string> = Array(5).fill('inactive');
        response[index] = 'active';
        setOrderTabs(response);

        switch(index){
            case 0:
                setSelectedOrder(orders.orders_A)
                break;
            case 1:
                setSelectedOrder(orders.orders_AA)
                break;
            case 2:
                setSelectedOrder(orders.orders_AAA)
                break;
            case 3:
                setSelectedOrder(orders.orders_B)
                break;
            case 4:
                setSelectedOrder(orders.orders_C)
                break;
        }
    }
    // console.log(orders.orders_AAA);
    console.log(selectedOrder);

    return (

        <div>
            <>
            <div className="tabs-container">
                <div className="tabs">
                    <div className={`tab ${tabs[0]}`} onClick={() =>changeTab(0)}>
                        <text>orders A</text>
                    </div>
                    <div className={`tab ${tabs[1]}`} onClick={() =>changeTab(1)}>
                        <text>orders AA</text>
                    </div>
                    <div className={`tab ${tabs[2]}`} id="A"  onClick={() =>changeTab(2)}>
                        <text>orders AAA</text>
                    </div>
                    <div className={`tab ${tabs[3]}`} onClick={() =>changeTab(3)}>
                        <text>orders B</text>
                    </div>
                    <div className={`tab ${tabs[4]}`} onClick={() =>changeTab(4 )}>
                        <text>orders C</text>
                    </div>


                </div>
            </div>
            <hr className="orders-hr"/>
            <div className="order-header">
                {/*<div className="sent">*/}
                <button className={`sent ${!errorTab?"orders-active" : ""}`} onClick={() =>setErrorTab(false)}>SENT</button>
                {/*</div>*/}
                {/*<div className="errors">*/}
                <button className={`errors ${errorTab?"orders-active" : ""}`} onClick={() =>setErrorTab(true)}>ERRORS</button>
                {/*</div>*/}
                <text className="order-header-text">RECENT ORDERS</text>
            </div>

            <div className="order-description">
                <text id="order-description-data">DATE & TIME</text>
                <text id="order-description-subject">SUBJECT</text>
                <text id="order-description-communication">COMMUNICATION TYPE</text>
                <text id="order-description-order">ORDER #</text>

            </div>
            <hr className="order-description-hr"/>
            <div className="order">
                <div className="order-date">
                    <text >Sat, Apr 14</text>
                    <text>4:19 PM</text>
                </div>
                <div className="order-subject">
                    <text >Thank You Bonus</text>
                    <text>joe.smith@testemail.com</text>
                </div>
                <div className="order-communication">
                    <text>Promotion Email</text>
                </div>
                <div className="order-number">
                    <text>12345546</text>
                </div>
                <button className="resend">RESEND</button>
                <div>
                </div>
            </div>
            <hr className="order-list-hr"/>
            {/*<BouncingDotsLoader/>*/}
            {selectedOrder.sent.map((value =>{
                return (<div className="order">
                    <div className="order-date">
                        <text >Sat, Apr 14</text>
                        <text>4:19 PM</text>
                    </div>
                    <div className="order-subject">
                        <text >Thank You Bonus</text>
                        <text>joe.smith@testemail.com</text>
                    </div>
                    <div className="order-communication">
                        <text>Promotion Email</text>
                    </div>
                    <div className="order-number">
                        <text>12345546</text>
                    </div>
                    <button className="resend">RESEND</button>
                </div>
            )}))}



            {/*{errorTab?<ErrorTab />: selectedOrder.sent.length > 0 ?<OrdersList order={selectedOrder}/> :*/}
            {/*    <div className="no-item"><text>No Items</text></div>*/}
            {/*}*/}

            {typeof orders !="undefined" ?(
                <div className="dashboard">

                </div>



            ) :<div></div> }
        </>
        </div>
    )
}

export default Orders
