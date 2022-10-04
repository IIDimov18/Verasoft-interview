import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderRequest } from "../dashboard/actions";
import { RootState } from "../dashboard/reducers/rootReducer";
import OrdersList from "./orders/OrdersList"
import ErrorTab from "./orders/ErrorTab";


const Orders = () => {
    const dispatch = useDispatch();
    const {pending, orders } = useSelector(
        (state: RootState) => state.order
    );
    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, []);
    const[index,setIndex] = React.useState(2);
    const [tabs,setOrderTabs]=React.useState(["inactive","inactive","active","inactive","inactive"]);
    const[errorTab , setErrorTab] = React.useState(false);
    const changeTab= (index:number) =>{
        let response:Array<string> = Array(5).fill('inactive');
        if (index!=-1){
                     response[index] = 'active'
                    setIndex(index);
            setErrorTab(false);
        }

        setOrderTabs(response);


    }


    return (

        <div>
            <>
            <div className="tabs-container">
                <div className="tabs">
                    {orders!=undefined?orders.map((order) =>{

                        return(
                            <div className={`tab ${tabs[order.id]}`} onClick={() =>changeTab(order.id)} >
                                <text>{order.key.replace("_"," ").toUpperCase()}</text>
                            </div>
                        )

                    }):""}
                </div>
            </div>
            <hr className="orders-hr"/>
            <div className="order-header">
                <button className={`sent ${!errorTab?"orders-active" : ""}`} onClick={() =>setErrorTab(false)}>SENT</button>

                <button className={`errors ${errorTab?"orders-active" : ""}`} onClick={() =>{setErrorTab(true);}}>ERRORS</button>
                <text className="order-header-text">RECENT ORDERS</text>
            </div>
            {errorTab?<ErrorTab/>:
            orders[index]!=undefined?orders[index].sent!=undefined?orders[index].sent.map((order) =>{
                return(
                    <OrdersList order={order}/>
                )
            }):<div className="ErrorTab"><div className="no-item"><text>No Items</text></div></div>:''}
        </>
        </div>
    )
}

export default Orders
