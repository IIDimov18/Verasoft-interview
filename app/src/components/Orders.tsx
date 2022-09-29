import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderRequest } from "../dashboard/actions";
import { RootState } from "../dashboard/reducers/rootReducer";
import ErrorTab from "./orders/ErrorTab";


const Orders = () => {
    const dispatch = useDispatch();
    const {pending, orders } = useSelector(
        (state: RootState) => state.order
    );
    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, []);
    const [tabs,setOrderTabs]=React.useState(["inactive","inactive","active","inactive","inactive"]);
    const[errorTab , setErrorTab] = React.useState(false);
    const changeTab= (index:number) =>{
        let response:Array<string> = Array(5).fill('inactive');
        if (index!=-1){
                     response[index] = 'active'
            setErrorTab(false);
        }

        setOrderTabs(response);


    }
    function formatDate(orderDate:string){
        let date = new Date(orderDate);
        let day = date.toLocaleDateString('default',{weekday: "short"});
        let month = date.toLocaleDateString('default',{month: "short"});
        return day+', '+month+" "+date.getDay();
    }
    function formatTime(orderTime:string){
        let time= new Date()
        let timeSeparated=orderTime.split(':');
        time.setHours(+timeSeparated[0]);
        time.setMinutes(+timeSeparated[1]);
        time.setSeconds(+timeSeparated[2]);
        let timeFinal = time.toLocaleDateString('default',{hour: 'numeric',minute:'numeric',hour12:true}).split(' ');
        return timeFinal[1]+' '+timeFinal[2];
    }

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
                <button className={`sent ${!errorTab?"orders-active" : ""}`} onClick={() =>setErrorTab(false)}>SENT</button>

                <button className={`errors ${errorTab?"orders-active" : ""}`} onClick={() =>{setErrorTab(true);}}>ERRORS</button>
                <text className="order-header-text">RECENT ORDERS</text>
            </div>


            {errorTab?<ErrorTab  />: tabs[0]=='inactive'?null:
                orders.orders_A.sent!=undefined?
                    orders.orders_A.sent.map(value => {
                        return(
                            <>
                                <div className="order-description">
                                    <text id="order-description-data">DATE & TIME</text>
                                    <text id="order-description-subject">SUBJECT</text>
                                    <text id="order-description-communication">COMMUNICATION TYPE</text>
                                    <text id="order-description-order">ORDER #</text>
                                    <hr className="order-description-hr"/>

                                </div>
                                <div className={`order ${value.id%2==0?'order-dark':''}`}>
                                    <div className="order-date">
                                        <text >{formatDate(value.sent_dt)}</text>
                                        <text>{formatTime(value.sent_tm)}</text>
                                    </div>
                                    <div className="order-subject">
                                        <text >{value.subject.title}</text>
                                        <text>{value.subject.email}</text>
                                    </div>
                                    <div className="order-communication">
                                        <text>{value.type}</text>
                                    </div>
                                    <div className="order-number">
                                        <text>{value.order_id}</text>
                                    </div>
                                    <button className="resend">RESEND</button>
                                </div>
                                <hr className="order-list-hr"/>
                            </>
                        )})
                    : <div className="ErrorTab"><div className="no-item"><text>No Items</text></div></div>}
                {errorTab?"":tabs[1]=='inactive'?null:
                    orders.orders_AA.sent!=undefined?
                        orders.orders_AA.sent.map(value => {
                            return(
                                <>
                                    {value.id==1?<div className="order-description">
                                        <text id="order-description-data">DATE & TIME</text>
                                        <text id="order-description-subject">SUBJECT</text>
                                        <text id="order-description-communication">COMMUNICATION TYPE</text>
                                        <text id="order-description-order">ORDER #</text>
                                        <hr className="order-description-hr"/>

                                    </div>:null}
                                    <div className={` order ${value.id%2==0?'order-dark':''}`}>
                                        <div className="order-date">
                                            <text >{formatDate(value.sent_dt)}</text>
                                            <text>{formatTime(value.sent_tm)}</text>
                                        </div>
                                        <div className="order-subject">
                                            <text >{value.subject.title}</text>
                                            <text>{value.subject.email}</text>
                                        </div>
                                        <div className="order-communication">
                                            <text>{value.type}</text>
                                        </div>
                                        <div className="order-number">
                                            <text>{value.order_id}</text>
                                        </div>
                                        <button className="resend">RESEND</button>
                                    </div>
                                    <hr className="order-list-hr"/>
                                </>
                            )})
                        : <div className="ErrorTab"><div className="no-item"><text>No Items</text></div></div>}
                {errorTab?"":tabs[2]=='inactive'?null:
                    orders.orders_AAA.sent!=undefined?
                        orders.orders_AAA.sent.map(value => {
                            return(
                                <>
                                    {value.id==1?<div className="order-description">
                                        <text id="order-description-data">DATE & TIME</text>
                                        <text id="order-description-subject">SUBJECT</text>
                                        <text id="order-description-communication">COMMUNICATION TYPE</text>
                                        <text id="order-description-order">ORDER #</text>
                                        <hr className="order-description-hr"/>

                                    </div>:null}
                                    <div className={` order ${value.id%2==0?'order-dark':''}`}>
                                        <div className="order-date">
                                            <text >{formatDate(value.sent_dt)}</text>
                                            <text>{formatTime(value.sent_tm)}</text>
                                        </div>
                                        <div className="order-subject">
                                            <text >{value.subject.title}</text>
                                            <text>{value.subject.email}</text>
                                        </div>
                                        <div className="order-communication">
                                            <text>{value.type}</text>
                                        </div>
                                        <div className="order-number">
                                            <text>{value.order_id}</text>
                                        </div>
                                        <button className="resend">RESEND</button>
                                    </div>
                                    <hr className="order-list-hr"/>
                                </>
                            )})
                        : <div className="ErrorTab"><div className="no-item"><text>No Items</text></div></div>}
                {errorTab?"":tabs[3]=='inactive'?null:
                    orders.orders_B.sent!=undefined?
                        orders.orders_B.sent.map(value => {
                            return(
                                <>
                                    {value.id==1?<div className="order-description">
                                        <text id="order-description-data">DATE & TIME</text>
                                        <text id="order-description-subject">SUBJECT</text>
                                        <text id="order-description-communication">COMMUNICATION TYPE</text>
                                        <text id="order-description-order">ORDER #</text>
                                        <hr className="order-description-hr"/>

                                    </div>:null}
                                    <div className={`order ${value.id%2==0?'order-dark':''}`}>
                                        <div className="order-date">
                                            <text >{formatDate(value.sent_dt)}</text>
                                            <text>{formatTime(value.sent_tm)}</text>
                                        </div>
                                        <div className="order-subject">
                                            <text >{value.subject.title}</text>
                                            <text>{value.subject.email}</text>
                                        </div>
                                        <div className="order-communication">
                                            <text>{value.type}</text>
                                        </div>
                                        <div className="order-number">
                                            <text>{value.order_id}</text>
                                        </div>
                                        <button className="resend">RESEND</button>
                                    </div>
                                    <hr className="order-list-hr"/>
                                </>
                            )})
                        : <div className="ErrorTab"><div className="no-item"><text>No Items</text></div></div>}
                {errorTab?"":tabs[4]=='inactive'?null:
                    orders.orders_C.sent!=undefined?

                        orders.orders_C.sent.map(value => {
                            return(
                                <>
                                    {value.id==1?<div className="order-description">
                                        <text id="order-description-data">DATE & TIME</text>
                                        <text id="order-description-subject">SUBJECT</text>
                                        <text id="order-description-communication">COMMUNICATION TYPE</text>
                                        <text id="order-description-order">ORDER #</text>
                                        <hr className="order-description-hr"/>

                                    </div>:null}

                                    <div className={`order ${value.id%2==0?'order-dark':''}`}>
                                        <div className="order-date">
                                            <text >{formatDate(value.sent_dt)}</text>
                                            <text>{formatTime(value.sent_tm)}</text>
                                        </div>
                                        <div className="order-subject">
                                            <text >{value.subject.title}</text>
                                            <text>{value.subject.email}</text>
                                        </div>
                                        <div className="order-communication">
                                            <text>{value.type}</text>
                                        </div>
                                        <div className="order-number">
                                            <text>{value.order_id}</text>
                                        </div>
                                        <button className="resend">RESEND</button>
                                    </div>
                                    <hr className="order-list-hr"/>
                                </>
                            )})
                        : <div className="ErrorTab"><div className="no-item"><text>No Items</text></div></div>}


        </>
        </div>
    )
}

export default Orders
