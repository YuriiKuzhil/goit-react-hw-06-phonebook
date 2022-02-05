import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
const themeStyle = createReducer('light', {
  [actions.themeChange]: (_, { payload }) => payload,
});
export default combineReducers({
  items,
  filter,
  themeStyle,
});
