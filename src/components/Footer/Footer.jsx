import React from 'react';
import './footer.scss';

function Footer(props) {
    return (
        <div className="footer">
            <div className="section-footer-0">
                <div className="grid wide">
                    <div className="footer-top">
                        <div className="row">
                            <span className="footer-top-item">CHÍNH SÁCH ĐỔI TRẢ</span>
                            <span className="footer-top-item">ĐỊA CHỈ: PHẠM VĂN ĐỒNG</span>
                            <span className="footer-top-item">PHÍ GIAO HÀNG</span>
                            <span className="footer-top-item">LIÊN HỆ: 1900.6363.91</span>
                            <span className="footer-top-item">SHOPPE: PINKBEAUTYNPC</span>
                            <span className="footer-top-item">THANH TOÁN</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-footer-1">
                <div className="grid wide">
                    <div className="footer-middle">
                        <h5>PINK BEAUTY SHOP</h5>
                        <p>
                        <ion-icon name="mail-outline"></ion-icon>npcpink00@gmail.com
                    </p>
                    <p>
                        <ion-icon name="call-outline"></ion-icon>0968695197 - 19001508
                    </p>
                    <p className="footer-middle-orther-info">
                        Since 2020
                    </p>
                    </div>
                </div>
            </div>
            <div className="section-footer-2">
                <div className="grid wide">
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col l-6 footer-bottom-item">
                                <p>Bản quyền © 2020 - <span>PINK BEAUTY SHOP</span></p>
                            </div>
                            <div className="col l-6 footer-bottom-item">
                            <p>Phát triển bởi <span>Pink beaury shop</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer

