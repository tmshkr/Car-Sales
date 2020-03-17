import { ADD_ITEM, REMOVE_ITEM } from "./types";

export const addItem = id => ({
  type: ADD_ITEM,
  id
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id
});
