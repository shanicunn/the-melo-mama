import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Slideshow() {
        // SLIDE SHOW IMAGE ARRAY
    const slideImages = [
            require('../assets/images/slideshow/larry-crayton-KXOaNSU63NE-unsplash.jpg'),
            require('../assets/images/slideshow/austin-wade-uZjV42FWnag-unsplash.jpg'),
            require('../assets/images/slideshow/annie-spratt-1YnBzhJISg4-unsplash.jpg'),
            require('../assets/images/slideshow/larry-crayton-Oj77q2yIjzI-unsplash.jpg'),
            require('../assets/images/slideshow/mehmet-turgut-kirkgoz--Yzq6cIDggI-unsplash.jpg'),
            // require(''),
        ];
        
            return (
                 <div className="slide-container">
                     <Slide>
                         <div className="each-slide">
                            {/* style={{'backgroundImage': `url(${slideImages[0]})`}} */}
                          
                                 <img src={slideImages[0]} alt="" />
                                 {/* <span>Playing with infant</span> */}
                             
                         </div>
                         <div className="each-slide">
                             
                                <img src={slideImages[1]} alt="" />
                                {/* <span>New mom holding baby</span> */}
                             
                         </div>
                         <div className="each-slide">
                             
                                <img src={slideImages[2]} alt="" />
                                {/* <span>Baby sleeping in baby wrap</span> */}
                             
                         </div>
                         <div className="each-slide">
                             
                                <img src={slideImages[3]} alt="" />
                                {/* <span>Family walking the beach</span> */}
                             
                         </div>
                         <div className="each-slide">
                             
                             <img src={slideImages[4]} alt="" />
                                 {/* <span>Baby breastfeeding</span> */}
                             
                         </div>
                     </Slide>
                 </div>
             )
         
}
export default Slideshow;