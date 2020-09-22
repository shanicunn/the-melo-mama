import React from 'react';
import BlogPost from './BlogPost';
import shutterBanner from '../assets/images/shutterstock/shutterstock_1500308615.svg';
import blog1 from '../assets/images/blogs/camylla-battani-dz8g0IxEqh0-unsplash.jpg';
import blog2 from '../assets/images/blogs/chayene-rafaela-invemvSFXAM-unsplash.jpg';

export default function Blog() {
    return (
        <main className="blog">
            {/* <section className="banner">
                <img className="shutterBanner" src={shutterBanner} alt=""></img>
            </section> */}
            <section className="blogPosts">
                <BlogPost 
                    date="April 14, 2020"
                    title="3 ways to prepare for labor and delivery during Covid-19"
                    description="You've met with your doula, have seen your OB and NP so many times you've lost count and are all on a first name basis."
                    imgUrl={blog1}
                />
                <BlogPost 
                    date="March 27, 2020"
                    title="Coronocation gestation and lactation: an unprecedented experience"
                    description="Here we are in the middle of Coronageddon, you, your spouse, and chldren are home and life as ew knewi all but came to a grinding halt..."
                    imgUrl={blog2}
                />
            </section>
            <section className="banner">
                <img className="shutterBanner" src={shutterBanner} alt=""></img>
            </section>
        </main>
    )
}