import { configureStore } from "@reduxjs/toolkit";
import logReducer from "../feature/log/logSlice";

export default configureStore({
  reducer: {
    log: logReducer,
  },
});
