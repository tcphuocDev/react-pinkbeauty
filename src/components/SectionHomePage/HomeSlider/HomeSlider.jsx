import React, {useState} from 'react';
import './homeSlider.scss';
import { SliderData } from './SliderData';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";


function HomeSlider({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1) ;
    }

    const prevSlide  = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    // let interval = setInterval(nextSlide, 6000);

    // setTimeout(() => {
    //     clearInterval(interval);
    // },6000);
    
    return (
        <div className="col l-9 slider ">
         <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
           {SliderData.map((slide, index) => {
                    return (
                        <>

                       <div  key={index} className={index === current ? 'slide active' : 'slide'} 
                       > 
                       {index === current && (<img  src={slide.image} alt="branch" className="image" />)}
                       </div>
                       {/* <ul className="slider-dots">
                            <li className="slider-dot-item active" data-index="0"></li>
                        </ul> */}
                        </>
                       
                    )
           })}
         </div>
               
      
    )
}



export default HomeSlider;

