import {IOrder, IOrderModifier} from "../../dashboard/types";
import React from "react";
import ErrorTab from "./ErrorTab";

type OrderType = {
    orders: IOrderModifier[],
    index: number
}

const OrdersList = ({orders, index}: OrderType) => {
    function formatDate(orderDate: string) {
        let date = new Date(orderDate);
        let day = date.toLocaleDateString('default', {weekday: "short"});
        let month = date.toLocaleDateString('default', {month: "short"});
        return day + ', ' + month + " " + date.getDay();
    }

    function formatTime(orderTime: string) {
        let time = new Date()
        let timeSeparated = orderTime.split(':');
        time.setHours(+timeSeparated[0]);
        time.setMinutes(+timeSeparated[1]);
        time.setSeconds(+timeSeparated[2]);
        let timeFinal = time.toLocaleDateString('default', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        }).split(' ');
        return timeFinal[1] + ' ' + timeFinal[2];
    }

    const [errorTab, setErrorTab] = React.useState(false);
    return (
        <div>
            <>
                <div className="order-header">
                    <button className={`sent ${!errorTab ? "orders-active" : ""}`}
                            onClick={() => setErrorTab(false)}>SENT
                    </button>

                    <button className={`errors ${errorTab ? "orders-active" : ""}`} onClick={() => {
                        setErrorTab(true);
                    }}>ERRORS
                    </button>
                    <text className="order-header-text">RECENT ORDERS</text>
                </div>

                {errorTab ? <ErrorTab/> :
                    orders[index] != undefined ? orders[index].sent != undefined ? orders[index].sent.map((order) => {
                        return (
                            <>
                                {order.id == 1 ?
                                    <div className="order-description">
                                        <div className="order-description-container">
                                            <text id="order-description-data">DATE & TIME</text>
                                            <text id="order-description-subject">SUBJECT</text>
                                            <text id="order-description-communication">COMMUNICATION TYPE</text>
                                            <text id="order-description-order">ORDER #</text>
                                        </div>
                                        <hr className="order-description-hr"/>
                                    </div>
                                    : ""}
                                <div className={`order ${order.id % 2 == 0 ? 'order-dark' : ''}`}>
                                    <div className="order-date">
                                        <text>{formatDate(order.sent_dt)}</text>
                                        <text>{formatTime(order.sent_tm)}</text>
                                    </div>
                                    <div className="order-subject">
                                        <text>{order.subject.title}</text>
                                        <text>{order.subject.email}</text>
                                    </div>
                                    <div className="order-communication">
                                        <text>{order.type}</text>
                                    </div>
                                    <div className="order-number">
                                        <text>{order.order_id}</text>
                                    </div>
                                    <button className="resend">RESEND</button>
                                </div>
                                <hr className="order-list-hr"/>
                            </>
                        )
                    }) : <div className="ErrorTab">
                        <div className="no-item">
                            <text>No Items</text>
                        </div>
                    </div> : ''}


            </>
        </div>
    )
}

export default OrdersList
