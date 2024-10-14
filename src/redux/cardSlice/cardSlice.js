import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardDetails: JSON.parse(localStorage.getItem("cardlist")) || [],
  mode: JSON.parse(localStorage.getItem("mode")) || ""
};
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      const newCard = [...state.cardDetails, action.payload];
      state.cardDetails = newCard;
      localStorage.setItem("cardlist", JSON.stringify(state.cardDetails));
    },
    deleteDetails: (state, action) => {
      state.cardDetails = state.cardDetails.filter(
        (card) => card.ind !== action.payload
      );
      localStorage.setItem("cardlist", JSON.stringify(state.cardDetails));
    },
    updateDetails: (state, action) => {
      const index = state.cardDetails.findIndex(
        (card) => card.ind === action.payload.ind
      );
      if (index !== -1) {
        state.cardDetails[index] = action.payload;
      }
    },
    addMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("mode", JSON.stringify(state.mode));
    },
    deleteDisAktivate: (state, action) => {
      state.cardDetails = state.cardDetails.filter(
        (card) => card.isAktiverat !== action.payload
      );
      localStorage.setItem("cardlist", JSON.stringify(state.cardDetails));
    }
  }
});
export const {
  addDetails,
  deleteDetails,
  updateDetails,
  addMode,
  deleteDisAktivate
} = cardSlice.actions;
export default cardSlice.reducer;
