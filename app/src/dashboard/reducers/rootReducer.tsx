import { combineReducers } from "redux";
import PersonReducer from "./personReducer";
import OrderReducer from "./orderReducer";

const rootReducer = combineReducers({
     person: PersonReducer,
     order: OrderReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
