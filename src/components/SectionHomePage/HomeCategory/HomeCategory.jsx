import React from 'react'
import './homeCategory.scss';
import HomeCategoryItem from './HomeCategoryItem';
function HomeCategory(props){
    const {categorys}=props;
   
  
    return (
        <div className="col l-3 home-category">
            <ul className="home-category-list">
            {categorys.map((item, index) => {
                
                return (
                  <HomeCategoryItem 
                   name={item.category_name} key={index} category_id={item.id} />
                ) 
            })}
            </ul>
        </div>
    )
}



export default HomeCategory

