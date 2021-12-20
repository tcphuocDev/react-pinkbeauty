import React from 'react'
import './OrderForm.scss';
const OrderForm = () => {
    return (
       <>
         <div className="cart__header form-deliver__header ">
                    <h6 className="cart__title">Nhập thông tin khách hàng</h6>
                    <div className="cart__header-login">
                        <p>
                        Đăng nhập để đặt hàng với tài khoản
                        </p>
                        <img src="/img/order/icon-google.png" alt="" />
                    </div>
                </div>


                <div className="form-customer__wrap">
                    <h6 className="cart__title form-deliver__text">Thông tin người mua hàng</h6>
                    <div className="form-deliver__info">
                        <div className="form-group col l-6">
                            <label>
                                Tên
                                <em className="must">*</em>
                            </label>
                            <input type="text" className="form-deliver__input" placeholder="Họ và tên" />
                        </div>
                        <div className="form-group col l-6">
                            <label>
                                Số điện thoại
                                <em className="must">*</em>
                            </label>
                            <input type="text" className="form-deliver__input" placeholder="Số điện thoại đã đăng kí thành viên(nếu có)" />
                        </div>
                    </div>
                    <div className="form-deliver__info">
                        <div className="form-group col l-12">
                            <label>
                                Địa chỉ
                                <em className="must">*</em>
                            </label>
                            <input type="text" className="form-deliver__input" placeholder="Nhập địa chỉ" />
                        </div>
                    </div>
                    <div className="form-deliver__note col l-12">
                        <div className="form-group">
                            <label>
                                Ghi chú
                            </label>
                            <textarea maxLength={200} className="form-deliver__input text-note" placeholder="Lưu ý cho người bán" defaultValue={""} />
                        </div>
                    </div>
                </div>

       </>
    )
}

export default OrderForm
