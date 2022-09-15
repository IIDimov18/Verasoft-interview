import {IOrder} from "../../dashboard/types";

type OrderType={
    order: { sent: IOrder[]; }
}

const OrdersList = (orders:OrderType) => {
    console.log(orders);
    return (
        <div>
            <>
            {/*<div className="order-description">*/}
            {/*    <text id="order-description-data">DATE & TIME</text>*/}
            {/*    <text id="order-description-subject">SUBJECT</text>*/}
            {/*    <text id="order-description-communication">COMMUNICATION TYPE</text>*/}
            {/*    <text id="order-description-order">ORDER #</text>*/}

            {/*</div>*/}
            {/*    <hr className="order-description-hr"/>*/}
            {/*<div className="order">*/}
            {/*    <div className="order-date">*/}
            {/*        <text >Sat, Apr 14</text>*/}
            {/*        <text>4:19 PM</text>*/}
            {/*    </div>*/}
            {/*    <div className="order-subject">*/}
            {/*        <text >Thank You Bonus</text>*/}
            {/*        <text>joe.smith@testemail.com</text>*/}
            {/*    </div>*/}
            {/*    <div className="order-communication">*/}
            {/*        <text>Promotion Email</text>*/}
            {/*    </div>*/}
            {/*    <div className="order-number">*/}
            {/*        <text>12345546</text>*/}
            {/*    </div>*/}
            {/*        <button className="resend">RESEND</button>*/}
            {/*    <div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*    <hr className="order-list-hr"/>*/}

            {/*    {orders.order.sent.map((value =>{*/}
            {/*    <div className="order">*/}
            {/*        aaaaaaaaaaaaaaaaaaaaaa*/}
            {/*        <div className="order-date">*/}
            {/*            <text >Sat, Apr 14</text>*/}
            {/*            <text>4:19 PM</text>*/}
            {/*        </div>*/}
            {/*        <div className="order-subject">*/}
            {/*            <text >Thank You Bonus</text>*/}
            {/*            <text>joe.smith@testemail.com</text>*/}
            {/*        </div>*/}
            {/*        <div className="order-communication">*/}
            {/*            <text>Promotion Email</text>*/}
            {/*        </div>*/}
            {/*        <div className="order-number">*/}
            {/*            <text>12345546</text>*/}
            {/*        </div>*/}
            {/*        <button className="resend">RESEND</button>*/}
            {/*    </div>*/}
            {/*}))}*/}
            </>
        </div>
    )
}

export default OrdersList
