import React, { useState, useEffect, useRef } from "react";

const AdditionalFeature = props => {
  console.log(props);
  // const [selected, setSelected] = useState(false);
  const { actions, item } = props;
  const { addItem, removeItem } = actions;
  // const didMount = useRef(false);

  // useEffect(() => {
  //   if (didMount.current) {
  //     selected ? addItem(item.id) : removeItem();
  //   } else didMount.current = true;
  // }, [selected]);

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
