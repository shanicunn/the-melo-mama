import React from 'react';

export default function Contact () {
    return (
        <main className="contact">
            <section>
                <h1>Melody Cunningham, The Melo Mama</h1>
                <h2>Boston, MA</h2>
                <h2>melomamasMA@gmail.com</h2>
                <h2>617-955-5083</h2>
            </section>
            <form>

                <h1>Initial Consultation</h1>
                {/* <label>First Name:</label> */}
                <input type="text"placeholder="First Name" size="52" required />
                <br />
                {/* <label>Last Name:</label> */}
                <input type="text" placeholder="Last Name" size="52" required/>
                <br />
                {/* <label type="email">E-mail:</label> */}
                <input type="email" placeholder="you@example.com" size="52" required/>
                <br />
                {/* <label type="phone">Phone Number:</label> */}
                <input type="phone" placeholder="1231231234" size="52" required/>
                <br />
                {/* <label type="address">Address:</label> */}
                <input type="addresstext" placeholder="123 Street City, State Zipcode" size="52" required/>
                <br />
                {/* <label type="textarea">Concerns:</label> */}
                <textarea area rows="4" cols="50" placeholder="Place anything you'd like to discuss here." > </textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}