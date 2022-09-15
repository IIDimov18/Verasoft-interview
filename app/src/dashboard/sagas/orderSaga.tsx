import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IOrders } from "../types";
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
        const response: IOrders = yield call(getOrder);
        // let orders;
        // for(let key in response){
        //     orders[key] = response
        //     console.log(response[key])
        // }
        // console.log(response)
        yield put(
            fetchOrderSuccess({
                orders: response
            })
        );
    } catch (e) {

    }
}

function* orderSaga() {
    yield all([takeLatest(dashboardTypes.FETCH_ORDER_REQUEST, fetchOrderSaga)]);
}

export default orderSaga;
