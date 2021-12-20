import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import HomeCategory from '../../components/SectionHomePage/HomeCategory/HomeCategory';
import HomeProduct from '../../components/SectionHomePage/HomeProduct/HomeProduct';
import HomeSlider from '../../components/SectionHomePage/HomeSlider/HomeSlider';
import { SliderData } from '../../components/SectionHomePage/HomeSlider/SliderData';
function HomePage(props) {
  const {products, categorys , listsmenu} = props;
  function componentWillMount() {
    document.title="PINK BEAUTY SHOP";
  }
  componentWillMount();

 
      return (
        <>
         
          <Header categorys={categorys}
          listsmenu={listsmenu}
            />
          
            <div className="grid container">
                <div className="wrapper">
                    <HomeCategory categorys={categorys} />
                    <HomeSlider slides={SliderData}/>
                </div>
            </div>
            <div className="home-product">
              <div className="grid wide">
                  <div className="section-home-0">
                      <h3 className="home-heading">COCOON SALE SHOCK</h3>
                  </div>
                  <div className="section-home-1"></div>
                    <div className="section-home-2">
                      {products.map((listItem) => {
                        return (
                          <HomeProduct   listProductItem={listItem}  />
                        )
                      })} 
                    </div> 
              </div>
        </div>
          <Footer/>
        </>
    )
}


export default HomePage;

