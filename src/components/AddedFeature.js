import React from "react";

const AddedFeature = props => {
  const { item } = props;
  const { removeItem } = props.actions;
  return (
    <li>
      <button className="button" onClick={() => removeItem(item.id)}>
        X
      </button>
      {item.name}
    </li>
  );
};

export default AddedFeature;
