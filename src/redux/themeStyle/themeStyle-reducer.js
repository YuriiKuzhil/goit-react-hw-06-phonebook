import { createReducer } from '@reduxjs/toolkit';
import { themeChange } from '../themeStyle/themeStyle-actions';

const themeStyle = createReducer('light', {
  [themeChange]: (_, { payload }) => payload,
});
export default themeStyle;
