import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import general from "./reducers/general";

export const store = configureStore({
  reducer: {
    general: general,
  },
});

setupListeners(store.dispatch);
