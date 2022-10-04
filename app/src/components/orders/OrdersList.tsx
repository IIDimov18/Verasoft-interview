import {IOrder} from "../../dashboard/types";
import React from "react";

type OrderType={
    order: IOrder
}

const OrdersList = (order:OrderType) => {
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
                {order.order.id==1?
                <div className="order-description">
                    <text id="order-description-data">DATE & TIME</text>
                    <text id="order-description-subject">SUBJECT</text>
                    <text id="order-description-communication">COMMUNICATION TYPE</text>
                    <text id="order-description-order">ORDER #</text>
                    <hr className="order-description-hr"/>

                </div>
                    :""}
                <div className={`order ${order.order.id%2==0?'order-dark':''}`}>
                    <div className="order-date">
                        <text >{formatDate(order.order.sent_dt)}</text>
                        <text>{formatTime(order.order.sent_tm)}</text>
                    </div>
                    <div className="order-subject">
                        <text >{order.order.subject.title}</text>
                        <text>{order.order.subject.email}</text>
                    </div>
                    <div className="order-communication">
                        <text>{order.order.type}</text>
                    </div>
                    <div className="order-number">
                        <text>{order.order.order_id}</text>
                    </div>
                    <button className="resend">RESEND</button>
                </div>
                <hr className="order-list-hr"/>
            </>
        </div>
    )
}

export default OrdersList
