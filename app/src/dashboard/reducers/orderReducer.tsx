import {dashboardTypes} from "../actionTypes";

import {DashboardActions, OrderState} from "../types";

const initialState: OrderState = {
    pending: false,
    orders: [],
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
                todos: [],
                error: action.payload.orders,
            };
        default:
            return {
                ...state,
            };
    }
};
