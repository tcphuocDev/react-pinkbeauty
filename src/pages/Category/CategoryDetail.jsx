import React , {Fragment}from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Link,useParams} from "react-router-dom";
import SidebarCategopryList from '../../components/SectionCategory/Sidebar-options/SidebarCategoryList';
import SidebarActionForm from '../../components/SectionCategory/Sidebar-action/SidebarActionForm';
import ToobarProduct from '../../components/SectionCategory/ToobarProduct/ToobarProduct';
import './categoryDetail.scss';
import CategoryProduct from '../../components/SectionCategory/CategoryProduct/CategoryProduct';

function CategoryDetail(props) {
    const {categorys ,products ,listsmenu} = props;
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
            <Header  categorys={categorys}
                listsmenu={listsmenu}/>  
                <div className="bread-crumb">
                       <div className="container bread-crumb-box">
                       <Link to="/" className="link bread-crumb-item bread-crumb-item-first">Trang chủ</Link>
                        <ion-icon name="caret-forward-outline"></ion-icon>

                        {categorys.filter((linkItem ) => chuyenDoiURL(linkItem.category_name) === slug).map((val, index)=>(
                            <span  className="link bread-crumb-item bread-crumb-item-current" key={index}>{val.category_name}</span>
                        ))}

                       </div>
                </div>
            <div className="section-content-page">
                <div className="grid wide">
                        <div className="product-main">
                            <div className="row">
                                <div className="col l-2 sidebar-option">
                                    <div className="sidebar-options-form">
                                        <SidebarCategopryList products={products} categorys={categorys}/>
                                    </div>
                                    <div className="sidebar-action">
                                        <h6>Bộ lọc</h6>
                                        <Link to="#" className="link sidebar-action-clear">Xóa tất cả</Link>
                                        </div>
                                        <SidebarActionForm/>
                                    </div>
                                <div className="col l-10 section-main">
                                    <ToobarProduct/>
                                    <div className="category-list product-list">
                                    {categorys.filter((linkItem ) => chuyenDoiURL(linkItem.category_name) === slug).map((val, index)=>(
                                            <>
                                                {products.filter((listItem)=> chuyenDoiURL(listItem.category_name )=== slug).map((value, index) => {
                                                    return (
                                                    <>
                                                            <CategoryProduct products={value}/>
                                                        
                                                    </>
                                                )})}

                                            </>
                                            ))}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
          <Footer/>
       </Fragment>
    )
}



export default CategoryDetail;

