import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  CHANGE_CART_QTY,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      const updatedCart = [...state.cartItems];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
        };
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.qty++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cartItems: updatedCart };
    }
    case REMOVE_ITEM: {
      const updatedCart = [...state.cartItems];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.qty--;

      if (updatedItem.qty <= 0) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cartItems: updatedCart };
    }
    case CHANGE_CART_QTY: {
      return {
        ...state,
        cartItems: state.cartItems.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
