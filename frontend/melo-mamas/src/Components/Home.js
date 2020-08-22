import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import bellybind from '../assets/images/events/bellybind.jpg';
import babywrap from '../assets/images/events/annie-spratt-2INKkSrEmc8-unsplash.jpg';
import lactationCookie from '../assets/images/welcome-services/What-I-Ate-Wednesday-8-19.jpg';
import placentaEncap from '../assets/images/welcome-services/placenta-encapsulation-750x375.jpg';
import blackDoula from '../assets/images/welcome-services/yejikim-doula.jpg';
import babyOnBack from '../assets/images/welcome-services/barbara-alcada-w7aGkQO63q0-unsplash.jpg'; 

function Home () {
    // SLIDE SHOW IMAGE ARRAY
    const slideImages = [
        require('../assets/images/slideshow/larry-crayton-KXOaNSU63NE-unsplash.jpg'),
        require('../assets/images/slideshow/austin-wade-uZjV42FWnag-unsplash.jpg'),
        require('../assets/images/slideshow/annie-spratt-1YnBzhJISg4-unsplash.jpg'),
        require('../assets/images/slideshow/larry-crayton-Oj77q2yIjzI-unsplash.jpg'),
        require('../assets/images/slideshow/mehmet-turgut-kirkgoz--Yzq6cIDggI-unsplash.jpg'),
        // require(''),
    ];
    // SLIDESHOW FUNCTION
     const Slideshow = () => {
         return (
             <div className="slide-container">
                 <Slide>
                     <div className="each-slide">
                        {/* style={{'backgroundImage': `url(${slideImages[0]})`}} */}
                      
                             <img src={slideImages[0]} alt="" />
                             <span>Playing with infant</span>
                         
                     </div>
                     <div className="each-slide">
                         
                            <img src={slideImages[1]} alt="" />
                            <span>New mom holding baby</span>
                         
                     </div>
                     <div className="each-slide">
                         
                            <img src={slideImages[2]} alt="" />
                            <span>Baby sleeping in baby wrap</span>
                         
                     </div>
                     <div className="each-slide">
                         
                            <img src={slideImages[3]} alt="" />
                            <span>Family walking the beach</span>
                         
                     </div>
                     <div className="each-slide">
                         
                         <img src={slideImages[4]} alt="" />
                             <span>Baby breastfeeding</span>
                         
                     </div>
                 </Slide>
             </div>
         )
     }
    return (
        <main className="home">
            <section className="welcome">
                <div>
                    <h1>Melo Mamas</h1>
                    <h2>Lovingly and Patiently Supporting Women and Families through Pregnancy and Postpartum is What I Do</h2>
                    <h3>As your Doula, I will work by your side as you prepare to give birth; present in each moment with a spirit of love and compassion. Whether you are interested in a home lactation consult or would like to work with me as your Doula, I’ll provide the emotional, educational and physical support you need not only during labor, but throughout your pregnancy and postpartum as well. We are a team and I've got your back.</h3>
                    <Slideshow />
                </div>
                <div className="welcome-services">
                    
                    <article className="doula">
                        <img src={blackDoula} alt="" />
                        <h2>Doula</h2>
                        
                        <ul>
                            <li>Antepartum</li>
                            <li>Birth</li>
                            <li>Postpartum</li>
                        </ul>
                    
                    </article>

                    <article className="wraps">
                        <img src={babyOnBack} alt="" />
                        <h2>Wrap Devices</h2>
                        
                        <ul>
                            <li>Belly Binds</li>
                            <li>Baby Wraps</li>
                            <li>Wearing Instructions</li>
                        </ul>
                    </article>
                    
                    <article className="placenta">
                        <img src={placentaEncap} alt="" />
                        <h2>Placenta</h2>
                        
                        <ul>
                            <li>Placenta Encapsulation</li>
                            <li>Framed Placenta and Cord Keepsake</li>
                        </ul>
                    </article>
                    
                    <article className="lactation">
                        <img src={lactationCookie} alt=" " />
                        <h2>Lactation</h2>
                        
                        <ul>
                            <li>Virtual</li>
                            <li>In Person</li>
                            <li>Lactation Cookies</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section className="events">
                <h1>Events</h1>
                <article>
                    <figure>
                    <img src={babywrap} alt="" />
                        <figcaption>
                            <h1>Baby Wearing</h1>
                            <h2>Jun 21, 1:00 PM – 3:00 PM <br />
                            The Guild, 260 Washington St, Dorchester, MA 02121, USA</h2>
                            <h3>Learn the many benefits of baby wearing as well as proper positioning techniques.</h3>
                        </figcaption>
                    </figure>
                    <button>RSVP</button>
                </article>

                <article>
                    
                    <figure>
                    <img src={bellybind} alt="" />
                        <figcaption>
                            <h1>Belly Binding</h1>
                            <h2>Jun 07, 4:00 PM – 6:00 PM EDT <br />
                            The Guild, 260 Washington St, Dorchester, MA 02121, USA</h2>
                            <h3>Learn the basics of Bengkung and African belly binding.</h3>
                        </figcaption>
                    </figure>
                    <button>RSVP</button>
                </article>

                {/* <article>
                    <figure>
                    <img src={} alt="" />
                        <figcaption>
                            <h1></h1>
                            <h2></h2>
                            <h3></h3>
                        </figcaption>
                    </figure>
                    <button>RSVP</button>
                </article> */}

            </section>
        </main>
    )
}



export default Home;