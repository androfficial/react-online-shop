import { actionTypes } from "./actionTypes";

export const setSearchValue = (payload) => ({
  type: actionTypes.SET_SEARCH_VALUE,
  payload,
});

export const clearInputField = (payload) => ({
  type: actionTypes.CLEAR_INPUT_FIELD,
  payload,
});