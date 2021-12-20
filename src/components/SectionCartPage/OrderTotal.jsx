import React ,{useContext, useEffect, useState}from 'react'
import './OrderTotal.scss';
import CartContext from '../../context/Cart/CartContext';
const OrderTotal = () => {
    const { cartItems } = useContext(CartContext);
    const [total , setToTal ] = useState();

    useEffect(()=> {
        setToTal(
            cartItems.reduce((amount, item) => amount + (item.price) * item.qty, 0).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        )
    },[cartItems])
    return (
        <div className="total-pay__wrap col l-12">
                <div className="total-pay">
                    <span className="total-pay__text">Tổng tiền hàng</span>
                    <span className="total-pay__number">{total} đ</span>
                </div>
                <div className="total-pay">
                    <span className="total-pay__text to-pay">Tổng thanh toán</span>
                    <span className="total-pay__number to-pay">{total} đ</span>
                </div>
                <button className="total-pay__button">Đặt hàng</button>
            </div>
    )
}

export default OrderTotal
