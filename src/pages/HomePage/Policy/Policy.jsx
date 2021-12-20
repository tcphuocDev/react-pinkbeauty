import React, { Fragment } from 'react';
import Footer from '../../../components/Footer/Footer';
import Header from "../../../components/Header/Header";
import { Link} from 'react-router-dom';

import './Policy.scss';
function Policy(props) {
        function componentWillMount() {
                document.title="CHÍNH SÁCH ĐỔI TRẢ";
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
                        <span  className="link bread-crumb-item bread-crumb-item-current">CHÍNH SÁCH ĐỔI TRẢ</span>
                       </div>
                </div>
            <div className="grid wide">
                    <div className="content-page">
                        <div className="blog-detail">
                                <div className="blog-detail-header">
                                        <div className="blog-detail-top blog-item-top">
                                                <time className="blog-item-time">12/09/2021</time>
                                        </div>
                                        <h1 className="blog-detail-title">CHÍNH SÁCH ĐỔI TRẢ</h1>
                                        <div className="blog-social-share">

                                        </div>
                                </div>
                                <div className="blog-detail-summarry">
                                        
                                </div>
                                <div className="blog-detail-body">
                                        <div className="blog-detail-content">
                                                <p><strong>Nhằm tạo sự thoải mái trong mua sắm cũng như ưu đãi về quyền lợi cho người mua Pink sẽ áp dụng chính sách đổi trả hàng cụ thể như sau:</strong></p>
                                                <ul>
                                                        <li>Sản phẩm bị lỗi do nhà sản xuất (trong vòng 3 ngày)</li>
                                                        <li>Sản phẩm bị vỡ hỏng do vận chuyển</li>
                                                        <li>Sản phẩm sai mẫu mã so với đơn đặt hàng</li>
                                                        <li>Sản phẩm đã hết hạn sử dụng</li>
                                                        <li>Để đảm bảo chất lượng sản phẩm ra khỏi cửa hàng nên các lý do chủ quan của người mua sẽ không được chấp nhận đổi trả. Nên thực hiện điều này là bảo vệ quyền lợi cho khách hàng</li>
                                                </ul>

                                                <p><strong>Điều kiện sản phẩm khi đổi trả hàng:</strong></p>
                                                <ul>
                                                        <li>Sản phẩm đổi trả phải đúng với sản phẩm bạn đã mua tại Pinkbeautyshop ( xác định qua hóa đơn , số điện thoại, tem của sp )</li>
                                                        <li>Sản phẩm chưa sử dụng, bao bì tem nhãn còn nguyên vẹn</li>
                                                        <li>Sản phẩm được thông báo đổi trả trong thời gian 48 giờ tính từ lúc mua hàng tại shop hoặc đối với các đơn ship là từ khi nhận được hàng.</li>
                                                </ul>
                                                <br />
                                                <p>
                                                        <strong>Quy trình đổi trả hàng:</strong>
                                                      
                                                </p>
                                                <br />
                                                <br />
                                                <p>
                                                       <strong>Bước 1</strong>
                                                       <br />
                                                       <span>Liên hệ Hotline: <strong>1900.633.691 ( số cửa hàng: 033.2927.743 )</strong>  hoặc gửi ib vào Fanpage của <strong>Pink beauty shop</strong> để thông báo về tình trạng hàng hóa và lý do muốn đổi.</span>
                                                </p>
                                                <br />
                                                <br />
                                                <p>
                                                       <strong>Bước 2</strong>
                                                       <br />
                                                       <span>Bạn gửi trả sản phẩm còn nguyên bao bì, tem mác qua gặp quản lý của các cửa hàng của Pink hoặc gửi tại số 148 Chùa Láng  qua các đơn vị vận chuyển uy tín.
                                                        Lưu ý các bạn tránh các ngày mùng 1 mùng 2 đầu tháng giúp shop nhé ạ</span>
                                                </p>
                                                <br />
                                                <br />
                                                <p>
                                                       <strong>Bước 3</strong>
                                                       <br />
                                                       <span>Sau khi đã nhận, kiểm tra và chấp nhận sản phẩm mà bạn trả lại, Bộ Phận Hoàn Trả Sản Phẩm của Pink sẽ tiến hành đổi sản phẩm  cho bạn trong vòng 01 đến 02 ngày làm việc.
                                                        Mong là với chính sách cụ thể rõ ràng sẽ giúp các nàng của Pink yên tâm mua sắm hơn
                                                        Để biết thêm về <strong>cách thức mua hàng</strong>  và tư vấn mua hàng các bạn liên hệ với chúng mình qua Contact này nhé: <strong>Hotline 033.2927.743</strong></span>
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



export default Policy;

