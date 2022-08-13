import { rootReducer } from './contacts/contacts-reducers';
import authReducer from './auth/auth-slice';

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(
//   persistConfig,
//   rootReducer,
//   authReducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: rootReducer,
//   },
// });

// export default store;

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
