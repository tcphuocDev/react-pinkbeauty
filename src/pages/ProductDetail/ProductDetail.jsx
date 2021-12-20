import React, { Fragment } from 'react'
import './ProductDetail.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import CartProductDetail from '../../components/SectionProductDetail/CartProductDetail/CartProductDetail';
import ProductDetailForm from '../../components/SectionProductDetail/ProductDetailForm/ProductDetailForm';
const ProductDetail = (props) => {
    const { categorys ,listsmenu , products } = props;
    const {slug} =useParams();
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
        <Fragment>
            <Header categorys={categorys} listsmenu={listsmenu} />
                <div className="bread-crumb">
                    <div className="container bread-crumb-box">
                    <Link to="/" className="link bread-crumb-item bread-crumb-item-first">Trang chủ</Link>
                        <ion-icon name="caret-forward-outline"></ion-icon>
                                 {products.map((value)=> (
                                        <>
                                        {value.content.filter((linkItem)=> chuyenDoiURL(linkItem.name )=== slug).map((item) => (
                                             <span  className="link bread-crumb-item bread-crumb-item-current">{item.name}</span>
                                        ))}
                                        </>
                                 ))}
                    </div>
                </div>
                <div className="grid wide">
                    <div className="content-page">
                            {products.map((value)=> (
                                        <>
                                        {value.content.filter((linkItem)=> chuyenDoiURL(linkItem.name )=== slug).map((product) => (
                                           <>
                                            <CartProductDetail product={product}/>
                                            <div className="row description">
                                            <div className="col l-12 description-pd">
                                                <p className="description-heading">Mô tả chi tiết</p>
                                                <p className="description-text">{product.desc}</p>
                                            </div>
                                            </div>
                                            <ProductDetailForm/>
                                           </>
                                        ))}
                                        </>
                                 ))}
                                

                    </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default ProductDetail;
