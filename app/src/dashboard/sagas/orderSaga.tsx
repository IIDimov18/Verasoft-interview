import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IOrderModifier,IOrder,IOrders } from "../types";
import {
    fetchOrderSuccess
} from "../actions";
import { dashboardTypes } from "../actionTypes";

const getOrder = () =>{
    let response = axios.get("https://evoteam-verasoft.github.io/data/orders.json");
    return response.then((response) => response.data)
}
function* fetchOrderSaga() {
    try {
        const response:[] = yield call(getOrder);

        let i:number=0;
        let modifiedOrders:IOrders = []
        for(let orders in response){
            let order:IOrderModifier={
                id:i,
                key: '',
                sent:[]
            }
            order.key=orders;
            order.sent=response[orders]['sent'];
            modifiedOrders.push(order);
            i++;
        }
        yield put(
            fetchOrderSuccess({
                orders: modifiedOrders
            })
        );
    } catch (e) {

    }
}

function* orderSaga() {
    yield all([takeLatest(dashboardTypes.FETCH_ORDER_REQUEST, fetchOrderSaga)]);
}

export default orderSaga;
