import React, { useContext, useState } from 'react';
import './header.scss';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiICons from "react-icons/ai";
import CartContext from '../../context/Cart/CartContext';
import HomeCart from '../SectionHomePage/HomeCart/HomeCart';
function Header(props){
    const { categorys ,listsmenu } = props;
    const { cartItems, showHideCart } = useContext(CartContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isShow, isSetShow] = useState(false);
    const [sidebar , setSidebar] = useState(false);
    const ShowSidebar = () => setSidebar(!sidebar);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false :true );
        return () => (window.onscroll = null);
    }   
    const Toggle  = () => {
        isSetShow(!isShow);
    }
    const ShowListAcount = () => {
        return (
            <div className="header-main-account-list">
        <div className="account-list-item">
            <ion-icon class="header-main-icon header-main-account-google" name="logo-google"></ion-icon>
            <span>Đăng nhập bằng google</span>
        </div> 
        </div>
        )
    }

        return (
        <div className={isScrolled ? "section-header scrolle" : "section-header"}>

            {/* ẩn hiện sidebar */}
              <div className={sidebar ? "nav-sidebar active" : "nav-sidebar"}>
                <ul className="sidebar_list">
                <li className="nav-toogle">
                    <Link to="#" onClick={ShowSidebar} className='icon-link-close'>
                        <AiICons.AiOutlineClose />
                    </Link>
                </li>
                 {categorys.map((val, index) => {
                    return (
                        <li 
                        className="sidebar_list-item"
                        key={index}>
                            <Link to="/">
                            {val.category_name}
                            </Link>

                        </li>
                    )
                })}  
                </ul>
            </div>
            <div className="grid wide">
                <div className="section-header-main">

                    {/* Fixed thanh header */}
                    <div className={isScrolled ? "header-menu-bar show" : "header-menu-bar"}>
                        <Link to="#" className='menu-bars'>
                            <FaIcons.FaBars onClick={ShowSidebar}/>
                        </Link>
                    </div>

                    {/* End */}
                    <Link to="/"><img src="/img/header/logo.jpg" alt="Logo" className="header-main-logo"/></Link>

                    <div className="header-main-search">
                        <input type="text" name="" id="" placeholder="Nhập Mã Hàng, Tên Sản Phẩm Để Tìm Kiếm" />
                        <button className="btn btn-header-search">
                             <ion-icon class="header-main__icon-search" name="search-outline"></ion-icon>
                        </button>
                    </div>
                    <div className="header-main-account" onClick = {() => Toggle()} >
                        <div className="header-main-account-wrapper">
                            <ion-icon class="header-main-icon header-main-account-icon_user " name="person-circle-outline"></ion-icon>
                            <h4>Tài khoản</h4>
                            <ion-icon class="header-main-icon header-main-account-icon_down" name="caret-down-outline"></ion-icon>
                        </div>
                        {/* Ẩn hiện đăng nhập */}

                        {isShow && <ShowListAcount/>}

                        {/* End */}
                    </div>
                    <div className="header-main-cart"   >
                        <div className="header-main-cart-wrap">
                            {cartItems.length > 0  && (
                                <div className="header-main-cart-number">
                                <span>{cartItems.length}</span>
                            </div>
                            )}
                            <ion-icon 
                           onClick={showHideCart}
                            class="header-main-icon header-main-account-icon_cart" 
                            name="cart-outline"></ion-icon>
                        </div>
                        <HomeCart/>
                    </div>
                </div>
            </div>
            <div className={isScrolled ? "section-header-menu hide" : "section-header-menu"}>
                    <div className="grid wide">
                        <ul className="header-menu-list">
                           {listsmenu.map((item, index)=> {
                               return (
                                
                                   <li className={item.cName} key={index}>
                                       <Link className="link header-menu-list-item_link" 
                                       to={ item.path}>
                                           {item.title}
                                    </Link>
                                   </li>
                                   
                               )
                              
                           })}
                        </ul>
                    </div>
                </div>
        </div>
    )
}



export default Header


