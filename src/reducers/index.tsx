import { combineReducers } from "@reduxjs/toolkit";
import { type } from "os";
import counter from "./counterReducers";

export const rootReducer = combineReducers({
  counter: counter,
});

export type RootState = ReturnType<typeof rootReducer>;
