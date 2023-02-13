import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import FilmsStateReducer from '@src/store/slices/filmsSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import type {TStoreReducers} from '@src/constants/types';

const reducer = combineReducers<TStoreReducers>({
  filmsState: FilmsStateReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const persistedReducer = persistReducer<TStoreReducers>(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {warnAfter: 200},
      serializableCheck: {
        warnAfter: 200,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persisted = persistStore(store);

export default store;
export type AppDispatch = typeof store.dispatch;
