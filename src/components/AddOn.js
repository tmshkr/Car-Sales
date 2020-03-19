import React from "react";
import { addItem, removeItem } from "../actions";

const AddOn = props => {
  const { dispatch, item } = props;

  return (
    <li>
      {item.name} (+{item.price})
      <button
        className="button"
        onClick={() =>
          dispatch(item.selected ? removeItem(item.id) : addItem(item.id))
        }
      >
        {item.selected ? "Remove" : "Add"}
      </button>
    </li>
  );
};

export default AddOn;
