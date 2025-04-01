import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "./employeeSlice";
import modalReducer from "./modalSlice";

const store = configureStore ({
    reducer: {
        employee: employeeReducer, 
        modal: modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


export default store;