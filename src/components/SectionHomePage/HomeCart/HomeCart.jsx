import React, { useContext,useEffect,useState } from "react";
import './homeCart.scss'
import CartContext from '../../../context/Cart/CartContext';
import HomeCartItem from "./HomeCartItem";
import * as BiIcons from "react-icons/bi";
import { Link} from 'react-router-dom';
function HomeCart () {
    const {showCart , cartItems , showHideCart} = useContext(CartContext);
    const [total , setToTal ] = useState();

    useEffect(()=> {
        setToTal(
            cartItems.reduce((amount, item) => amount + (item.price) * item.qty, 0).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        )
    },[cartItems])
 
  

    return (
      <>
        {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <div className="cart__empty">
                <BiIcons.BiShoppingBag className="cart__empty-icon"/>
                <h4>Bạn chưa có hàng hóa nào trong giỏ hàng!</h4>
              </div>
            ) : (
              <>
              <ul>
                {cartItems.map((item) => (
                  <HomeCartItem key={item._id} item={item} />
                ))}
                
              </ul>
               <div className="Cart__cartTotal">
             <h5>Tổng tiền hàng:</h5>
            <div></div>
             <div className="Cart__price" style={{ marginLeft: 5 }}>
                  {total}
              <sup>đ</sup>
            </div>
          </div> 
          <div className="Cart__button">
              <Link to="/cart-page">Thanh Toán</Link>
          </div>
              </>
            )}
          </div>
       
        </div>
      )}
      </>
    )
}
export default HomeCart;