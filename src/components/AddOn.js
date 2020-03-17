import React from "react";

const AddOn = props => {
  const { actions, item } = props;
  const { addItem, removeItem } = actions;

  return (
    <li>
      {item.name} (+{item.price})
      <button
        className="button"
        onClick={() => (item.selected ? removeItem(item.id) : addItem(item.id))}
      >
        {item.selected ? "Remove" : "Add"}
      </button>
    </li>
  );
};

export default AddOn;
