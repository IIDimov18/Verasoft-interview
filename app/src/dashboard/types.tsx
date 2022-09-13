import {dashboardTypes} from "./actionTypes";

export interface IPerson {
    id: number;
    first_name: string;
    last_name: string;
    photo_url: string;
    gender: string;
    birth_date:string;
    home_phone: string;
    mobile_phone: string;
    work_phone: string;
    email: string;
    activity:{
        sms: number,
        email: number,
        orders: number
    };
    carrier_status:{
        since: string,
        status: string
    };
}
export interface IOrder {
    id: number;
    order_id:number;
    sent_dt: string;
    sent_tm: string;
    subject:{
        title: string,
        email:string
    };
    type:string;
}

export interface PersonState {
    pending: boolean;
    person: IPerson[];
}

export interface OrderState {
    pending: boolean;
    orders: IOrder[];
}

export interface FetchPersonSuccessPayload {
    person: IPerson;
}
export interface FetchOrderSuccessPayload {
    orders: IOrder[];
}


export interface FetchPersonRequest {
    type: typeof dashboardTypes.FETCH_PERSON_REQUEST;
}
export interface FetchOrderRequest {
    type: typeof dashboardTypes.FETCH_ORDER_REQUEST;
}

export type FetchPersonSuccess = {
    type: typeof dashboardTypes.FETCH_PERSON_SUCCESS;
    payload: FetchPersonSuccessPayload;
};
export type FetchOrderSuccess = {
    type: typeof dashboardTypes.FETCH_ORDER_SUCCESS;
    payload: FetchOrderSuccessPayload;
};



export type DashboardActions =
    | FetchPersonRequest
    | FetchOrderRequest
    | FetchPersonSuccess
    | FetchOrderSuccess;
