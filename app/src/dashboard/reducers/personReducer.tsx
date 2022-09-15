import {dashboardTypes} from "../actionTypes";

import {DashboardActions, PersonState,} from "../types";

const initialState: PersonState = {
    pending: false,
    person: [],
};

export default (state = initialState, action: DashboardActions) => {
    switch (action.type) {
        case dashboardTypes.FETCH_PERSON_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case dashboardTypes.FETCH_PERSON_SUCCESS:
            return {
                ...state,
                pending: false,
                person: action.payload.person,
                error: null,
            };
        default:
            return {
                ...state,
            };
    }
};
