import userReducer from "src/reducers/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import exerciseSlice from "src/reducers/exercises/exerciseSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    exercise: exerciseSlice,

    //anotherReducer: counterAnotherReducer,
  },
});
