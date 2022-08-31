import React from 'react';
import Header from './components/Header';
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
          <Header />
          <hr className="header-line"></hr>
          <Dashboard />
    </div>
  );
}

export default App;
