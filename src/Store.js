import { createStore, combineReducers } from 'redux';
import { cartReducers } from './reducers/cartReducers';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { autoMergeLevel2 } from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {

  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, cartReducers);
const store = createStore(persistedReducer);
export { store };
