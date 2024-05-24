"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/interFace/interFace";

interface CartState {
  cartProducts: ProductType[];
}
const initialState: CartState = {
  cartProducts: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cart_product: (state, { payload }: PayloadAction<ProductType>) => {
      const productIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );

      if (productIndex >= 0) {
        state.cartProducts[productIndex].totalCard! += 1;
      } else {
        const tempProduct = {
          ...payload,
          totalCard: 1,
        };
        state.cartProducts.push(tempProduct);
      }
    },
    remove_cart_product: (
      state,
      { payload }: PayloadAction<ProductType>
    ) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== payload.id
      );
    },

    clear_cart: (state) => {
      const confirmMsg = window.confirm(
        "Are you sure deleted your all cart items ?"
      );
      if (confirmMsg) {
        state.cartProducts = [];
      }
    },

    decrease_quantity: (state, { payload }: PayloadAction<ProductType>) => {
      const cartIndex = state.cartProducts.findIndex(
        (item) => item.id === payload.id
      );
    
      if (cartIndex >= 0) {
        const totalCard = state.cartProducts[cartIndex]?.totalCard ?? 0;
    
        if (totalCard > 1) {
          state.cartProducts[cartIndex].totalCard = totalCard - 1;
        } else {
        }
      }
    }
  },
});

export const {
  cart_product,
  remove_cart_product,
  clear_cart,
  decrease_quantity,
} = cartSlice.actions;

export default cartSlice.reducer;
