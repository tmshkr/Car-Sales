const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg"
  },
  addedFeatures: {},
  addOns: {
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
      item = newState.addOns[action.id];
      item.selected = true;
      newState.addedFeatures[item.id] = item;
      break;
    case "REMOVE_ITEM":
      item = newState.addOns[action.id];
      item.selected = false;
      delete newState.addedFeatures[item.id];
      break;
    default:
      break;
  }
  newState.additionalPrice = Object.values(newState.addedFeatures).reduce(
    (a, c) => a + c.price,
    0
  );
  return newState;
};
