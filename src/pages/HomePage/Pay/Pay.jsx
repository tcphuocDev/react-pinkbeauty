import React, { Fragment  } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from "../../../components/Header/Header";
import { Link} from 'react-router-dom';
function Pay(props) {
        function componentWillMount() {
                document.title="THANH TOÁN";
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
                        <span  className=" bread-crumb-item bread-crumb-item-current">THANH TOÁN</span>
                       </div>
                </div>
            <div className="grid wide">
                    <div className="content-page">
                        <div className="blog-detail">
                                <div className="blog-detail-header">
                                        <div className="blog-detail-top blog-item-top">
                                                <time className="blog-item-time">12/09/2021</time>
                                        </div>
                                        <h1 className="blog-detail-title">PHƯƠNG THỨC THANH TOÁN</h1>
                                        <div className="blog-social-share">

                                        </div>
                                </div>
                                <div className="blog-detail-summarry">
                                        
                                </div>
                                <div className="blog-detail-body">
                                        <div className="blog-detail-content">
                                                <p><strong>Quý khách mua hàng tại Pinkbeauty có thể chọn các phương thức thanh toán sau đây:</strong></p>
                                                <p><strong>1. Thanh toán trực tiếp tại cửa hàng</strong></p>
                                                <p>+Thanh toán khi giao hàng (COD)</p>
                                                <p>+ Thanh toán bằng các loại thẻ thanh toán thẻ ghi nợ được chấp nhận theo quy định pháp luật hiện hành. </p>
                                                <p>+ Thanh toán Airpay  “giảm 30%”</p>
                                                <p>+ Thanh toán Vnpay ( mã QR) “ giảm 5% “</p>

                                                <p><strong>2.Thanh toán qua hình thức chuyển khoản</strong></p>
                                                <p>Quý khách chọn phương thức thanh toán chuyển khoản vui lòng chuyển khoản vào Số tài khoản:</p>
                                                <p>+ Tên ngân hàng: MB Bank- Ngân hàng Quân đội(COD)</p>
                                                <p>+ Thanh toán bằng các loại thẻ thanh toán thẻ ghi nợ được chấp nhận theo quy định pháp luật hiện hành. </p>
                                                <p>+ Số tài khoản     : 5050112345555</p>
                                                <p>+ Thanh toán Vnpay ( mã QR) “ giảm 5% “</p>
                                                <p>+ Chủ TK             : Lê Lan Phương</p>
                                                <p>+ Nội dung ck      : TT Chua Lang – Tên khách hàng - SĐT Khách hàng <br />
                                                (Ví dụ: TTCL - Nguyen Van A - 0123456789)</p>

                                                <p><strong>3.Thanh toán khi nhân viên đến giao nhận hàng (COD)</strong></p>
                                                <p>Quý khách vui lòng thanh toán tiền hàng cho nhân viên giao nhận của Pinkbeauty ạ.</p>
                                                <p><strong>Mọi thông tin chi tiết, thắc mắc hoặc cần trợ giúp, Quý khách vui lòng liên hệ Hotline: 1900.633.691 ấn phím 2</strong></p>
                                        </div>
                                </div>
                        </div>
                    </div>
            </div>
          <Footer/>
       </Fragment>
    )
}



export default Pay;

