import axios from "axios";
import Swal from "sweetalert2";
import { getCartThunk } from "../store/slices/cart.slice";
import config from "../store/slices/getConfig";

export const updateCartQtyThunk =
  (cartItemID, counter, cartItemQty) => (dispatch) => {
    const url = `${
      import.meta.env.VITE_BASE_URL
    }/cart/${cartItemID}`;
    const data = {
      quantity: counter + cartItemQty,
    };

    axios
      .put(url, data, config)
      .then((res) => {
        res;
        Swal.fire({
          scrollbarPadding: false,
          icon: "success",
          title: "The product has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(getCartThunk());
      })
      .catch((err) => err);
  };
