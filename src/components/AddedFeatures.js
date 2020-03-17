import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AddedFeature from "./AddedFeature";

const AddedFeatures = props => {
  const dispatch = useDispatch();
  const addedFeatures = useSelector(
    state => state.addedFeatures,
    () => false // forces re-render
  );

  return (
    <div className="content">
      <h6>Added features:</h6>
      {Object.keys(addedFeatures).length ? (
        <ol type="1">
          {Object.values(addedFeatures).map(item => (
            <AddedFeature key={item.id} item={item} dispatch={dispatch} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
