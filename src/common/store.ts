
// all the state combine


import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../counter-slice';

import nameReducer from '../name-slice';

// NOTE state is not in the store
const store = configureStore({
  // as we will dispatch actions on store, store should know which reducer to call
  reducer: {
    counter: counterReducer,
    names: nameReducer,
  },
});

export {store};