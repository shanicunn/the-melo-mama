import React from 'react';
import Slideshow from './Slideshow';
import bellybind from '../assets/images/events/bellybind.jpg';
import babywrap from '../assets/images/events/annie-spratt-2INKkSrEmc8-unsplash.jpg';
import lactationCookie from '../assets/images/welcome-services/What-I-Ate-Wednesday-8-19.jpg';
import placentaEncap from '../assets/images/welcome-services/placenta-encapsulation-750x375.jpg';
import blackDoula from '../assets/images/welcome-services/yejikim-doula.jpg';
import babyOnBack from '../assets/images/welcome-services/barbara-alcada-w7aGkQO63q0-unsplash.jpg'; 

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eventName1: "Baby Wearing",
            eventDate1: "Jun 21, 1:00 PM – 3:00 PM",
            eventAddress1: "The Guild, 260 Washington St, Dorchester, MA 02121, USA",
            eventDescription1: "Learn the many benefits of baby wearing as well as proper positioning techniques.",
            
            eventName2: "Belly Binding",
            eventDate2: "Jun 07, 4:00 PM – 6:00 PM EDT ",
            eventAddress2: "The Guild, 260 Washington St, Dorchester, MA 02121, USA",
            eventDescription2: "Learn the basics of Bengkung and African belly binding.",

        }
    }

     render() {
     return (
             <main className="home">
                 <section className="welcome">
                     <div className="welcome-child">
                         <h1 className="title">Melo Mamas</h1>
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
                     <h1 className="title">Events</h1>
                     <article>
                         <figure>
                         <img src={babywrap} alt="" />
                             <figcaption>
                                 <h1>{this.state.eventName1}</h1>
                                 <h2>{this.state.eventDate1} <br />
                                 {this.state.eventAddress1}</h2>
                                 <h3>{this.state.eventDescription1}</h3>
                             </figcaption>
                         </figure>
                         <button>RSVP</button>
                     </article>

                     <article>

                         <figure>
                         <img src={bellybind} alt="" />
                             <figcaption>
                                 <h1>{this.state.eventName2}</h1>
                                 <h2>{this.state.eventDate2} <br />
                                 {this.state.eventAddress2}</h2>
                                 <h3>{this.state.eventDescription2}</h3>
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

}



export default Home;