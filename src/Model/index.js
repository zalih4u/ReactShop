import homeModel from './Home'
import {init} from '@rematch/core';
import {reducer as formReducer} from 'redux-form';

var models = {
    homeModel,
};
const store = init({
  redux: {
    reducers: {
      router: {},
      form: formReducer,
    },
  },
  models,
});

export const {getState, dispatch} = store;
export {store};
