import { combineReducers } from 'redux';
import {
  UPDATE_LAYOUT_ID
} from 'babel/constants/actionsTypes/Settings';

export const id = function (state = 'sidePanel', action) {
  switch (action.type) {
    case UPDATE_LAYOUT_ID:
      return action.id;
    default:
      return state;
  }
};

export const theme = function (state = 'default', action) {
  switch (action.type) {
    case 'UPDATE_LAYOUT_THEME':
      return action.id;
    default:
      return state;
  }
};

export const layout = combineReducers({
  id,
  theme
});

export default layout;
