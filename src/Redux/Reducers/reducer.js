import cartItems from "../../cart_items";
import { CLEAR_CART, DECREMENT, INCREMENT, REMOVE } from "../actions"; // eslint-disable-line

const initialState = { cart: cartItems, amount: cartItems.length };

const reducer = (state = initialState, action) => {
  if (action.type === CLEAR_CART) return { ...state, cart: [], amount: 0 };
  if (action.type === DECREMENT) {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id)
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === INCREMENT) {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id)
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE)
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
      amount: state.amount - 1,
    };
  return state;
};

export default reducer;
