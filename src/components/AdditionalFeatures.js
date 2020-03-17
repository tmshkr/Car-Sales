import React from "react";
import { connect } from "react-redux";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  const { additionalFeatures, additionalPrice, car, dispatch } = props;
  const removeItem = index => {
    dispatch({
      type: "REMOVE_ITEM",
      index
    });
  };

  const addItem = index => {
    dispatch({
      type: "ADD_ITEM",
      index
    });
  };
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map((item, index) => (
            <AdditionalFeature
              key={item.id}
              item={item}
              index={index}
              actions={{ addItem, removeItem }}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  car: state.car,
  additionalPrice: state.additionalPrice,
  additionalFeatures: state.additionalFeatures
});

export default connect(mapStateToProps)(AdditionalFeatures);
