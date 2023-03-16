import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/auth-slice";
import contactsReducer from './contacts/contatcs-slice';
import filterReducer from "./filter/filter-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token']
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

 const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});

export default rootReducer; 