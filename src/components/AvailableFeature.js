import React from "react";

const AdditionalFeature = props => {
  console.log(props);
  const { actions, item } = props;
  const { addItem } = actions;

  return (
    <li>
      <button className="button" onClick={() => addItem(item.id)}>
        Add
      </button>
      {item.name} (+{item.price})
    </li>
  );
};

export default AdditionalFeature;
