import React from "react";
import { connect } from "react-redux";
import AddOn from "./AddOn";

const AvailableFeatures = props => {
  const { availableFeatures, addItem, removeItem } = props;

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {Object.keys(availableFeatures).length ? (
        <ol type="1">
          {Object.values(availableFeatures).map(item => (
            <AddOn
              key={item.id}
              item={item}
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
  availableFeatures: state.availableFeatures,
  updated: state.updated
});

const addItem = id => ({
  type: "ADD_ITEM",
  id
});

const removeItem = id => ({
  type: "REMOVE_ITEM",
  id
});

export default connect(mapStateToProps, { addItem, removeItem })(
  AvailableFeatures
);
