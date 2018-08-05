import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { autoRehydrate, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer( persistConfig, rootReducer );

export default function configureStore( initialState ) {
  return createStore(
    persistedReducer,
    initialState,
    applyMiddleware( thunk, reduxImmutableStateInvariant())
  );
}