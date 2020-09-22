import React from 'react';
import melomamamabio from '../assets/images/melomamabio.png';

function About () {
    return (
       <main className="about">
  
           <section className="image">
           <h1>About The Melo Mama</h1>
               <figure>
                    <img id="bio-img" src={melomamamabio} alt="" />
                   <figcaption>
                        The Melo Mama with one of her children.
                   </figcaption>
               </figure>
           </section>

           <section className="bio">
            <h1>

            </h1>
               <p>
               As an experienced homeopathic mother of 5 breastfed children and absolute lover of all things baby,
                transitioning into Doula work was seamless for me. <br /> <br />



                In addition to offering the most personalized prenatal, birthing and postnatal support, I also offer home lactation consultations, postpartum belly binding and baby wearing instruction and placenta encapsulation. <br /><br />

​

                My primary objective is YOU! By bringing you calming energy, giving you and your family the attention and knowledge you need to arm yourselves with the information needed to make informed decisions about your pregnancy and labor process, we take back the birthing experience and make it what you want it to be. <br /> <br />



                To learn more about me and the services I offer, please contact me for an initial consult.
               </p>
           </section>
       </main>
    )
}



export default About;