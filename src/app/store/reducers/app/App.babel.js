import $ from 'jquery';
import { combineReducers } from 'redux';
import portal from './portal/Portal';
import {
  DISPLAY_MAIN_ERROR,
  APP_COMPONTENT_LOADED,
  UPDATE_APP_LAYOUT_STATE,
  UPDATE_APP_CONTRIBUTE_STATE
} from 'babel/constants/actionsTypes/App';
import {
  RECEIVE_APP_ITEM
} from 'babel/constants/actionsTypes/Arcgis';

const defaultLoading = {
  data: false,
  map: false
};

const defaultContributing = {
  active: false,
  view: 'login'
};

export const mainError = function (state = false, action) {
  switch (action.type) {
    case DISPLAY_MAIN_ERROR:
      return action.message;
    default:
      return state;
  }
};

export const loading = function (state = defaultLoading, action) {
  switch (action.type) {
    case RECEIVE_APP_ITEM:
      return $.extend(true,{},state,{data: true});
    case APP_COMPONTENT_LOADED:
      const loadedComponents = {};

      loadedComponents[action.component] = true;
      return $.extend(true,{},state,loadedComponents);
    default:
      return state;
  }
};

export const layoutState = function (state = {}, action) {
  switch (action.type) {
    case UPDATE_APP_LAYOUT_STATE:
      return $.extend(true,{},state,action.options);
    default:
      return state;
  }
};

export const contributing = function (state = defaultContributing, action) {
  switch (action.type) {
    case UPDATE_APP_CONTRIBUTE_STATE:
      return $.extend(true,{},state,action.options);
    default:
      return state;
  }
};

export const app = combineReducers({
  contributing,
  mainError,
  loading,
  layoutState,
  portal
});

export default app;
