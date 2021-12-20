import React, {useContext, useState ,useEffect} from 'react'
import {Delete} from '@material-ui/icons';
import {BorderColor} from '@material-ui/icons';
import CartContext from '../../context/Cart/CartContext';
import './OrderProductItem.scss'
const OrderProductItem = (props) => {
    const {removeItem,addToCart} = useContext(CartContext);
    const {item} = props;
    let totalItem = (item.price * item.qty);
    
    return (
        <div className="cart-order__products">

                <div className="cart-order__product-item">
                    <div className="cart-product__item">
                        <div className="cart-product__content  col l-2">
                            <img src={item.img} alt={item.name} className="cart-item__img" />
                        </div>
                        <div className="cart-product__classsify col l-3">
                            <p>{item.id}</p>
                            <h6>{item.name}</h6>
                        </div>
                        <div className="cart-product__price col l-2">
                            <span>{(item.price).toLocaleString('vi-VN')} <sup>đ</sup> </span>
                        </div>
                        <div className="cart-product__amount">
                            <div className="product-amount__icon" onClick={() => removeItem(item.id)}>
                                <span>-</span>
                            </div>
                            <div className="product-amount__icon">
                                <span>{item.qty}</span>
                            </div>
                            <div className="product-amount__icon" onClick={() => addToCart(item)}>
                                <span>+</span>
                            </div>
                        </div>
                        <div className="cart-product__money col l-2">
                            <span>{totalItem.toLocaleString('vi-VN')} <sup>đ</sup> </span>
                        </div>
                        <div className="cart-product__action col l-1">
                            <div className="product-action__icon"  >
                                <Delete className='product-action__icon-del' onClick={() => removeItem(item.id)} />
                            </div>
                        </div>
                    </div>
                    <div className="cart-item__input">
                        <BorderColor className="icon"/>

                        <input type="text" placeholder="Nhập ghi chú..." />
                    </div>
                </div>
            </div>
    )
}

export default OrderProductItem
