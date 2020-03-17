import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AvailableFeatures from "./components/AvailableFeatures";
import Total from "./components/Total";

const App = props => {
  console.log(props);
  const { availableFeatures, additionalPrice, car, dispatch } = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AvailableFeatures />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  car: state.car,
  additionalPrice: state.additionalPrice,
  availableFeatures: state.availableFeatures
});

export default connect(mapStateToProps)(App);
