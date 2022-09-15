import {dashboardTypes} from "../actionTypes";

import {DashboardActions, IOrder, OrderState} from "../types";

const initialState: OrderState = {
    pending: false,

    orders:{
        "orders_A" : {sent: []},
        "orders_AA" :{sent: []},
        "orders_AAA" : {sent: []},
        "orders_B" : {sent: []},
        "orders_C" : {sent: []},
    }
};

export default (state = initialState, action: DashboardActions) => {
    switch (action.type) {
        case dashboardTypes.FETCH_ORDER_REQUEST:
            return{
                ...state,
                pending: true,
            }
        case dashboardTypes.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                pending: false,
                orders: action.payload.orders,
                error: null
            };
        default:
            return {
                ...state,
            };
    }
};
