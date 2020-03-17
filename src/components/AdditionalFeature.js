import React, { useState, useEffect, useRef } from "react";

const AdditionalFeature = props => {
  console.log(props);
  const [selected, setSelected] = useState(false);
  const { actions, index, item } = props;
  const { addItem, removeItem } = actions;
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      selected ? addItem(index) : removeItem(index);
    } else didMount.current = true;
  }, [selected]);

  return (
    <li>
      <button className="button" onClick={() => setSelected(!selected)}>
        {selected ? "Remove" : "Add"}
      </button>
      {item.name} (+{item.price})
    </li>
  );
};

export default AdditionalFeature;
