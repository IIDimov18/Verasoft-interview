import {IOrder} from "../../dashboard/types";

type OrderType={
    order: { sent: IOrder[]; }
}

const OrdersList = (orders:OrderType) => {
    return (
        <div>
            <>
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

            </>
        </div>
    )
}

export default OrdersList
