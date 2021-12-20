import React from 'react'
import './OrderDelivery.scss';
import {Adjust} from '@material-ui/icons';
const OrderDelivery = () => {
    return (
        <div className="cart-order__deliver" >
        <div className="cart__header col l-12">
            <h6 className="cart__title">Chọn hình thức giao hàng</h6>
        </div>
        <div className="cart-deliver__address">
            <div className="radio-form__store">
                <div className="check-address" >
                    <Adjust className="check-icon__store" />
                    <span className="text-color">Nhận tại chi nhánh</span>   
                </div>                    
                
                <div className="radio-form">
                    <p className="check-address__text">Quý khách vui lòng lựa chọn chi nhánh đến nhận hàng trực tiếp:</p>
                    <div className="radio-form1__store" >
                        <Adjust className="icon-color"/>
                        <span className="check-address__text">Số 80 ngõ 10 Tôn Thất Tùng, Phường Trung Liệt, Quận Đống Đa - Hà Nội</span>
                    </div> 
                    <div className="radio-form2__store">
                        <Adjust className= "check-icon2__store" />
                        <span className="check-address__text">Số 148 Chùa Láng, Phường Láng Thượng, Quận Đống Đa - Hà Nội</span>
                    </div>
                </div>
            </div>
            {/* address customer */}
            <div className="radio-form__customer" >
                <Adjust className= "icon-color"  />
                <span className="text-color1">Nhận tại địa chỉ người nhận</span> 
            </div>
        </div>
    </div>
    )
}

export default OrderDelivery
