import React , {Fragment, useContext}from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Cart.scss';
import CartContext from '../../context/Cart/CartContext';
import OrderProductItem from '../../components/SectionCartPage/OrderProductItem';
import OrderDelivery from '../../components/SectionCartPage/OrderDelivery';
import OrderForm from '../../components/SectionCartPage/OrderForm';
import OrderTotal from '../../components/SectionCartPage/OrderTotal';
const Cart = (props) => {
    const {categorys ,listsmenu} = props;
    const {cartItems} = useContext(CartContext);
    return (
        <Fragment>
        <Header categorys={categorys} listsmenu={listsmenu} />
           
        <div className="section-content-page">
            <div className="grid wide">
                  
            <div className="order-product">
                    <div className="cart-order__head col l-12">
                        <h1>Đặt hàng</h1>
                    </div>
                    
                    <div className="cart-ordering l-12">
                        {cartItems.length === 0 ? (
                                <div className="cart__empty">
                                    <h4>Bạn chưa có hàng hóa nào trong giỏ hàng!</h4>
                                </div>
                                ) : (
                        <div className="cart-order__heading l-12">
                       
                            <div className="cart__header col l-12">
                                <h6 className="cart__title">Giỏ hàng của tôi</h6>
                            </div>
                            <div className="cart-body">
                                <div className="cart-item__product col l-2">Sản phẩm</div>
                                <div className="cart-item__classify col l-3">Phân loại</div>
                                <div className="cart-item__price col l-2">Giá</div>
                                <div className="cart-item__amount col l-2">Số lượng</div>
                                <div className="cart-item__money col l-2">Thành tiền</div>
                                <div className="cart-item__action col-1">Thao tác</div>
                            </div>
                        </div>
                                )}
                        
                    </div>
                        {cartItems.map((item) => (
                            <OrderProductItem key={item._id} item={item}/>
                        ))}
                    </div>

           
                <OrderDelivery/>
                <OrderForm/>
                <OrderTotal/>
            </div>
           
        </div>
      <Footer/>
   </Fragment>
    )
}

export default Cart
