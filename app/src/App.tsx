import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonRequest,fetchOrderRequest } from "./dashboard/actions";
import { RootState } from "./dashboard/reducers/rootReducer";
import Header from './components/Header';
import Dashboard from "./components/Dashboard";
import Orders from './components/Orders'
import orderSaga from "./dashboard/sagas/orderSaga";
import {IPerson} from "./dashboard/types";

function App() {
    // const dispatch = useDispatch();
    //
    // const {pending, orders } = useSelector(
    //     (state: RootState) => state.order
    // );
    //
    // useEffect(() => {
    //     dispatch(fetchOrderRequest());
    // }, []);
    // console.log(orders);
  return (
    <div className="App">
          <Header />
        {/*{orders && orders.map(order =>*/}
        {/*    <div id={key}></div>*/}
        {/*    <h1>{order.sent}</h1>*/}
        {/*)}*/}
           <hr className="header-line"></hr>
          <Dashboard />
        <Orders />
    </div>
  );
}

export default App;
