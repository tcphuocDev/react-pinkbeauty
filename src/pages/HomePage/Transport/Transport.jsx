import React, { Fragment  } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from "../../../components/Header/Header";
import { Link} from 'react-router-dom';
import './transport.scss';
function Transport(props) {
        function componentWillMount() {
                document.title="PHÍ GIAO HÀNG";
              }
              componentWillMount();
              const {categorys , listsmenu} = props;
    return (
       <Fragment>
            <Header categorys={categorys}
          listsmenu={listsmenu}/>  
                <div className="bread-crumb">
                       <div className="container bread-crumb-box">
                       <Link to="/" className="link bread-crumb-item bread-crumb-item-first">Trang chủ</Link>
                        <ion-icon name="caret-forward-outline"></ion-icon>
                        <span  className="link bread-crumb-item bread-crumb-item-current">PHÍ GIAO HÀNG</span>
                       </div>
                </div>
            <div className="grid wide">
                    <div className="content-page">
                        <div className="blog-detail">
                                <div className="blog-detail-header">
                                        <div className="blog-detail-top blog-item-top">
                                                <time className="blog-item-time">12/09/2021</time>
                                        </div>
                                        <h1 className="blog-detail-title">PHÍ GIAO HÀNG</h1>
                                        <div className="blog-social-share">

                                        </div>
                                </div>
                                <div className="blog-detail-summarry">
                                        
                                </div>
                                <div className="blog-detail-body">
                                        <div className="blog-detail-content">
                                                <p><strong>Quý khách đặt hàng tại Pinkbeautyshop.vn vui lòng điền đầy đủ thông tin theo mẫu, sau đó lựa chọn 1 trong 2 phương thức thanh toán sau :</strong></p>
                                                <p><strong>1. Thanh toán khi nhận hàng:</strong></p>
                                                <p>+Thanh toán khi giao hàng (COD)</p>
                                                <p> Chỉ áp dụng ship COD với đơn nội thành Hà Nội </p>
                                                <p>Nếu bạn ở thành phố, tỉnh khác vui lòng chọn Tỉnh thành phố ở thông tin giao hàng đồng thời chuyển khoản trước giúp shop. Pink cảm ơn ạ.
                                                </p>
                                                <p><strong>2.Chuyển khoản qua ngân hàng:</strong></p>
                                                <p>Pink sẽ liên hệ với các bạn sau khi đặt hàng và cung cấp tài khoản phù hợp để giao dịch chuyển khoản được thuận tiện và nhanh nhất.</p>
                                         
                                                <p> Khi chuyển khoản qua ngân hàng. Quý khách vui lòng chuyển khoản số tiền đặt hàng + Phí Ship (nếu có) vào tài khoản ngân hàng đã chọn. </p>
                                            
                                                <p>Sau khi đã điền đầy đủ thông tin, quý khách kiểm tra lại đơn hàng và nhập Mã Giảm Giá (nếu có) sau đó Click vào nút Hoàn tất đơn hàng.
                                                </p>
                                        </div>
                                </div>
                        </div>
                    </div>
            </div>
          <Footer/>
       </Fragment>
    )
}



export default Transport;

