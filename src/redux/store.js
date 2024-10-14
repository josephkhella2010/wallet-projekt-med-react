import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice/cardSlice";

export const store = configureStore({
  reducer: {
    cardData: cardReducer
  }
});
