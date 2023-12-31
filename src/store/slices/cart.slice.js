import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "./getConfig";

const cartSlice = createSlice({
  name: "cart",
  initialState: null,
  reducers: {
    setCart: (state, action) => action.payload,
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getCartThunk = () => (dispatch) => {
  if (localStorage.getItem("token")) {
    const url = `${import.meta.env.VITE_BASE_URL}/cart`;

    axios
      .get(url, config)
      .then((res) => dispatch(setCart(res.data)))
      .catch((err) => err);
  }
};
