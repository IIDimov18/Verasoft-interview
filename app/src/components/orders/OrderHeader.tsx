import {IOrder} from "../../dashboard/types";
import React from "react";


const OrdersListHeader = () => {


    return (
        <div>
                <div className="order-description">
                    <text id="order-description-data">DATE & TIME</text>
                    <text id="order-description-subject">SUBJECT</text>
                    <text id="order-description-communication">COMMUNICATION TYPE</text>
                    <text id="order-description-order">ORDER #</text>
                    <hr className="order-description-hr"/>

                </div>
        </div>
    )
}

export default OrdersListHeader
