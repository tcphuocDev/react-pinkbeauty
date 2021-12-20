import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CHANGE_CART_QTY,
} from "../Types";
import { useReducer } from "react";
const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    numberCart: 0,
    qty: 0,
  };
  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const IncreaseQuantity = () => {
    dispatch({ type: INCREASE_QUANTITY });
  };
  const DecreaseQuantity = (payload) => {
    dispatch({ type: DECREASE_QUANTITY, payload });
  };
  const changeQty = (id) => {
    dispatch({ type: CHANGE_CART_QTY, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        IncreaseQuantity,
        DecreaseQuantity,
        changeQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
