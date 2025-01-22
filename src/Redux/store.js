import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import {authReducer} from "./Auth/Reducer";
import {chatReducer} from "../Components/chat/constants/Reducer";
import {messageReducer} from "../Components/message/constants/Reducer"; // Yeni sürüm için adlandırılmış içe aktarma

const rootReducer = combineReducers({
  auth:authReducer,
  chat:chatReducer,
  message:messageReducer
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
