export const Types = {
  SET_SEARCH_VALUE: 'SEARCH@SET_SEARCH_VALUE',
  CLEAR_INPUT_FIELD: 'SEARCH@CLEAR_INPUT_FIELD',
};

export const setSearchValue = (payload) => ({
  type: Types.SET_SEARCH_VALUE,
  payload,
});

export const clearInputField = (payload) => ({
  type: Types.CLEAR_INPUT_FIELD,
  payload,
});