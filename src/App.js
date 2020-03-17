import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AddOnList from "./components/AddOnList";
import Total from "./components/Total";

const App = props => {
  const { additionalPrice, car } = props;

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
};

const mapStateToProps = state => ({
  car: state.car,
  additionalPrice: state.additionalPrice
});

export default connect(mapStateToProps)(App);
