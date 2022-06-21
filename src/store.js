import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

import nameReducer from "./nameSlice";

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      name: nameReducer,
    }
  }
);

export default store;