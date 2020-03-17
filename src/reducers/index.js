import { combineReducers } from "redux";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: {}
  },
  addedFeatures: {},
  availableFeatures: {
    1: { id: 1, name: "V-6 engine", price: 1500 },
    2: { id: 2, name: "Racing detail package", price: 1500 },
    3: { id: 3, name: "Premium sound system", price: 500 },
    4: { id: 4, name: "Rear spoiler", price: 250 }
  },
  updated: Date.now()
};

export const reducer = (state = initialState, action) => {
  const newState = { ...state };
  newState.updated = Date.now(); // forces components to update when mapped to their props
  let item;
  switch (action.type) {
    case "ADD_ITEM":
      item = newState.availableFeatures[action.id];
      newState.addedFeatures[item.id] = item;
      delete newState.availableFeatures[item.id];
      break;
    case "REMOVE_ITEM":
      item = newState.addedFeatures[action.id];
      newState.availableFeatures[item.id] = item;
      delete newState.addedFeatures[item.id];
      break;
    default:
      break;
  }
  return newState;
};

// export const combinedReducers
