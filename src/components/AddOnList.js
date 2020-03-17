import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AddOn from "./AddOn";

const AddOnList = () => {
  const dispatch = useDispatch();
  const addOns = useSelector(state => state.addOns);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      <ol type="1">
        {Object.values(addOns).map(item => (
          <AddOn key={item.id} item={item} dispatch={dispatch} />
        ))}
      </ol>
    </div>
  );
};

export default AddOnList;
