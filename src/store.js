import { createStore, applyMiddleware, combineReducers } from "redux";
import postReducer from "./reducers/postReducer";
import authorReducer from "./reducers/authorReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  posts: postReducer,
  authors: authorReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
