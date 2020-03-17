import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AddOnList from "./components/AddOnList";
import Total from "./components/Total";

function App() {
  const state = useSelector(state => ({
    additionalPrice: state.additionalPrice,
    car: state.car
  }));

  const { additionalPrice, car } = state;

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AddOnList />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
}

export default App;
