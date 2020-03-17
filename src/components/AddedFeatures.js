import React from "react";
import { connect } from "react-redux";

import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  const { addedFeatures, removeItem } = props;

  return (
    <div className="content">
      <h6>Added features:</h6>
      {Object.keys(addedFeatures).length ? (
        <ol type="1">
          {Object.values(addedFeatures).map(item => (
            <AddedFeature key={item.id} item={item} actions={{ removeItem }} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  addedFeatures: state.addedFeatures,
  updated: state.updated
});

const removeItem = id => ({
  type: "REMOVE_ITEM",
  id
});

export default connect(mapStateToProps, { removeItem })(AddedFeatures);
