import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
import themeStyleReducer from './themeStyle/themeStyle-reducer';
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
import storage from 'redux-persist/lib/storage';

const PersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  themeStyle: themeStyleReducer,
});
export const store = configureStore({
  reducer: persistReducer(PersistConfig, rootReducer),

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
