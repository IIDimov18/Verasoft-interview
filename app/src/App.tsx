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

  return (
    <div className="App">
          <Header />
           <hr className="header-line"></hr>
          <Dashboard />
        <Orders />
    </div>
  );
}

export default App;
