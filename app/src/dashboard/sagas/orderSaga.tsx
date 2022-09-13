import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IOrder } from "../types";
import {
    fetchOrderSuccess
} from "../actions";
import { dashboardTypes } from "../actionTypes";

const getOrder = () =>
    axios.get<IOrder[]>("https://evoteam-verasoft.github.io/data/orders.json");

function* fetchOrderSaga() {
    try {
        const response = yield call(getOrder);
        yield put(
            fetchOrderSuccess({
                orders: response.data
            })
        );
    } catch (e) {

    }
}

function* orderSaga() {
    yield all([takeLatest(dashboardTypes.FETCH_ORDER_REQUEST, fetchOrderSaga)]);
}

export default orderSaga;
