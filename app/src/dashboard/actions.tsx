import { dashboardTypes } from "./actionTypes";
import {
    FetchPersonSuccess,
    FetchOrderSuccess,
    FetchOrderRequest,
    FetchPersonRequest,
    FetchPersonSuccessPayload,
    FetchOrderSuccessPayload
} from "./types";

export const fetchPersonRequest = (): FetchPersonRequest => ({
    type: dashboardTypes.FETCH_PERSON_REQUEST
});
export const fetchOrderRequest = (): FetchOrderRequest => ({
    type: dashboardTypes.FETCH_ORDER_REQUEST
});

export const fetchPersonSuccess = (
    payload: FetchPersonSuccessPayload
): FetchPersonSuccess => ({
    type: dashboardTypes.FETCH_PERSON_SUCCESS,
    payload
});

export const fetchOrderSuccess = (
    payload: FetchOrderSuccessPayload
): FetchOrderSuccess => ({
    type: dashboardTypes.FETCH_ORDER_SUCCESS,
    payload
});
