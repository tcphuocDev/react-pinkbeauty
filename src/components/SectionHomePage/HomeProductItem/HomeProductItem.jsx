import React, { useContext } from 'react';
import './homepoductitem.scss';
import {Link } from "react-router-dom";
import CartContext from '../../../context/Cart/CartContext';
function HomeProductItem({image, nameProduct,price, product}) {
    const { addToCart } = useContext(CartContext);
    const chuyenDoiURL = (str) => {
        str = str.toLowerCase();     
 
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
     
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
     
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
        return str;
    }
    return (
        <div className="col l-2-4 product-list-item">
            <Link to ="/" className="link product-item_img">
                <img src={image} alt="product_img"/>
            </Link>
            <div className="product-item-body">
                <Link to ={"/product-detail/" +chuyenDoiURL(nameProduct) + "." + product.id +".html"} className="link product-item-name">{nameProduct}</Link>
                <div className="product-item-price">
                    <span>{price.toLocaleString('vi-VN')} <sup>đ</sup></span>
                </div>
            <div className="product-item-btns">
                <Link to ="/" className="link btn product-item-btn" onClick={() => addToCart(product)}>
                    <ion-icon className="product-icon" name="cart-outline"></ion-icon>
                </Link>
                <Link to ="/" className="link btn product-item-btn">
                    <ion-icon className="product-icon product-icon-heart" name="heart-outline"></ion-icon>
                </Link>
                </div>
            </div>
        </div>

    )
}
export default HomeProductItem;


