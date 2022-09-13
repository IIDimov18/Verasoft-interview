import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonRequest,fetchOrderRequest } from "./dashboard/actions";
import { RootState } from "./dashboard/reducers/rootReducer";
import Header from './components/Header';
import Dashboard from "./components/Dashboard";

function App() {
    const dispatch = useDispatch();
    const { pending, orders } = useSelector(
        (state: RootState) => state.order
    );

    useEffect(() => {
        dispatch(fetchOrderRequest());
    }, []);
  return (
    <div className="App">
          <Header />
          <hr className="header-line"></hr>
          <Dashboard />
    </div>
  );
}

export default App;
