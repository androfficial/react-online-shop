import { CLEAR_INPUT_FIELD, SET_SEARCH_VALUE } from "../vars/vars";

export const setSearchValue = (payload) => ({
  type: SET_SEARCH_VALUE,
  payload,
});

export const clearInputField = (payload) => ({
  type: CLEAR_INPUT_FIELD,
  payload,
});