import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Features/Todo/TodoSlice";

export const store = configureStore({
    reducer:TodoSlice
})