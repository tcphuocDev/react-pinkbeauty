import React from 'react'
import './ProductDetailForm.scss';
import {Facebook} from '@material-ui/icons';
const ProductDetailForm = () => {
    return (
        <div className="row product_reviews">
            <div className="col l-12 product_reviews-pd">
                <div className="product_reviews-title">
                <p className="product_reviews-heading">Đánh giá sản phẩm</p>
                <p className="product_reviews-text">Chưa có đánh giá nào</p>
                <p className="product_reviews-suggestion">Hãy là người đầu tiên đánh giá sản phẩm <b>Son 3ce #Warming Wear</b></p>
                </div>
                <div className="product_reviews-form">
                <div className="product_reviews-user">
                    <div className="product_reviews-info">
                    <input type="text" className="product_reviews-info-input" placeholder="Nhập tên" />
                    <input type="text" className="product_reviews-info-input ml" placeholder="Nhập email" />
                    </div>
                    <strong>Hoặc đăng nhập bằng 
                    <Facebook className="product_reviews-info-icon"/>
                    </strong>
                </div>
                <textarea className="product_reviews-feel" cols={30} rows={5} placeholder="Hãy chia sẻ cảm nhận về sản phẩm này nhé" defaultValue={""} />
                <button className="product_reviews-submit">Gửi bình luận</button>
                </div>
            </div>
            </div>

    )
}

export default ProductDetailForm
