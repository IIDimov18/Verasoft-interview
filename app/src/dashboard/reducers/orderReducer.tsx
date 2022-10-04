import {dashboardTypes} from "../actionTypes";

import {DashboardActions, IOrder, OrderState} from "../types";

const initialState: OrderState = {
    pending: false,

    orders: []
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
