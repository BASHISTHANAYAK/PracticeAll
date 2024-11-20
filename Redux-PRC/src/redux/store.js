import { combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";

// Combine all reducers into a rootReducer
const rootReducer = combineReducers({
  todos: reducer, // `todos` is the key for this reducer's state
});

// Create the store
export const store = legacy_createStore(rootReducer);
