import { configureStore } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts/contacts.init-state';
import { authInitState } from './auth/auth.init-state';
import { phoneBookReducer } from './contacts/contacts.slice';
import { authReducer } from './auth/auth-slice';
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

const initState = {
  contacts: contactsInitState,
  auth: authInitState,
};

const presistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  devTools: true,
  preloadedState: initState,
  reducer: {
    contacts: phoneBookReducer,
    auth: presistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const contactsReducer = (state = [], action) => {};

// const filterReducer = (state = '', action) => {};
