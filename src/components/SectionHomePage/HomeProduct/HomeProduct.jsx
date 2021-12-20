import React from 'react';
import './homeproduct.scss';
import { Link} from "react-router-dom";
import HomeProductItem from '../HomeProductItem/HomeProductItem';
function HomeProduct(props) {
    const {listProductItem} = props;
     return (
          <>
    
                  <div className="section-home-2">
                      <div className="home-product-title">
                      <Link to="/" className="link home-product-name">{listProductItem.title}</Link>
                      <Link to ="/"  className="link home-product-more">XEM TẤT CẢ 
                      <ion-icon className="home-product-more-icon" name="chevron-forward-outline"></ion-icon>
                      </Link>
                  </div>
                      <div className="home-product-list home-product-skincare">
                         {listProductItem.content.map((value, index)=> {
                           return (
                                <HomeProductItem 
                                    key={index}
                                    image = {value.img}
                                    nameProduct={value.name}
                                    price={value.price}
                                    product={value}
                                />
                           )
                         })}
                      </div>
                  </div>
                
          </>
     )
              
      
      
    
}


export default HomeProduct

