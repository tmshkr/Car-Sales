import React from "react";
import { removeItem } from "../actions";

const AddedFeature = props => {
  const { dispatch, item } = props;
  return (
    <li>
      <button className="button" onClick={() => dispatch(removeItem(item.id))}>
        X
      </button>
      {item.name}
    </li>
  );
};

export default AddedFeature;
