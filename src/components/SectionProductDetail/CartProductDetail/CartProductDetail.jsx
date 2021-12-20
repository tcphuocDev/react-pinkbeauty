import React , {useContext, useState} from 'react'
import './CartProductDetail.scss';
import CartContext from '../../../context/Cart/CartContext';
const CartProductDetail = (props) => {
    const {product } = props;

    const [qty , setQty] = useState(1);

    const {removeItem,addToCart , changeQty} = useContext(CartContext);
    return (
        <div className="row product-details" key={product.id}>
                            <div className="col l-5 img-block">
                                <img src={product.img} alt="..." className="img_details" />
                                <div className="img-block-sub">
                                <img src={product.img} alt="..." className="img_details-sub" />
                                </div>
                            </div>
                            <div className="col l-4">
                                {/* Nhãn hiệu */}
                                <div className="brand">
                                <div className="brand-title">
                                    <div className="brand-name">
                                    <p className="name-1">8809664982286</p>
                                    <p className="name-2">Thương hiệu: {product.thuonghieu}</p>
                                    </div>
                                    {/* <Favorite className="brand-icon"/> */}
                                </div>
                                <div className="brand-price">
                                    <h4>{product.name}</h4>
                                    <p>{product.price}<sup>đ</sup></p>
                                </div>
                                <div className="brand-cart">
                                    {/* <div className="quantity">
                                    <span className="product-qty-icon minus"onClick={() => removeItem(product.id)}>-</span>
                                    <input type="text" class="mk-form-control product-qty-input" 
                                    value={1}
                                    onChange={(e) => changeQty(product.id , e.target.value)}/>
                                    <span className="product-qty-icon plus"onClick={() => addToCart(product)}>+</span>
                                    </div> */}
                                    <div className="brand-product-cart">
                                    <button className="btn-details product-in-cart mr-6" onClick={() => addToCart(product)}>Cho vào giỏ hàng</button>
                                    <button className="btn-details product-cart-buy" >Mua ngay</button>
                                    </div>
                                </div>
                                <div className="brand-contact">
                                    <button className="brand-btn mr-4">
                                    {/* <ThumbUpAlt className="brand-contact-icon"/> */}
                                    Thích 0
                                    </button>
                                    <button className="brand-btn">
                                    Chia sẻ
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="col l-3">
                                {/* Kho hàng */}
                                <div className="warehouse">
                                <h4 className="warehouse-heading">Thông tin kho hàng</h4>
                                <div className="warehouse-address border-bt">
                                    <p className="warehouse-address-title">Pink Chùa Láng</p>
                                    <p className="warehouse-address-contact">Số 148 Chùa Láng - Phường Láng Thượng - Quận Đống Đa - Hà Nội</p>
                                    <p className="warehouse-address-product">12 sản phẩm có sẵn</p>
                                </div>
                                <div className="warehouse-address">
                                    <p className="warehouse-address-title">Pink Tôn Thất Tùng</p>
                                    <p className="warehouse-address-contact">Số 80 ngõ 10 Tôn Thất Tùng - Phường Trung Liệt - Quận Đống Đa - Hà Nội</p>
                                    <p className="warehouse-address-product">8 sản phẩm có sẵn</p>
                                </div>
                                </div>
                            </div>
                            </div>
    )
}

export default CartProductDetail
