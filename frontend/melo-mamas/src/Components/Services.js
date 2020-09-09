import React from 'react';

function Services () {
    return (
        <main className="services">
        {/* DOULA */}
            <section>
                <table>
                    <thead> <th><h1>Doula Services </h1></th> <th><h1>Starting Costs</h1></th></thead>
                    <tbody>
                        <tr>
                             <td>Antepartum</td>
                             <td>$</td>
                         </tr>
                         <tr>
                             <td>Birth</td>
                             <td>$</td>
                         </tr>
                         <tr>
                            <td>Postpartum</td>
                            <td>$</td>
                         </tr>
                    </tbody>
                </table>
            </section>
        {/* WRAP DEVICES */}
            <section>
                <table>
                    <thead> <th><h1>Wrap Services </h1></th> <th><h1>Starting Costs</h1></th></thead>
                    <tbody>
                        <tr>
                             <td>Belly Binds</td>
                             <td>$</td>
                         </tr>
                         <tr>
                             <td>Baby Wraps</td>
                             <td>$</td>
                         </tr>

                    </tbody>
                </table>
            </section>
        {/* PLACENTA */}
                <table>
                    <thead> <th><h1>Placenta Services </h1></th> <th><h1>Starting Costs</h1></th></thead>
                    <tbody>
                        <tr>
                             <td>Placenta Encapsulation</td>
                             <td>$</td>
                         </tr>
                         <tr>
                             <td>Framed Placenta and Cord Keepsake</td>
                             <td>$</td>
                         </tr>

                    </tbody>
                </table>
        {/* LACTATION */}
                <table>
                    <thead>
                    <th><h1>Lactation Services </h1></th>
                    <th><h1>Starting Costs</h1></th>
                    </thead>
                    <tbody>
                        <tr>
                             <td>Virtual</td>
                             <td>$</td>
                         </tr>
                         <tr>
                             <td>In Person</td>
                             <td>$</td>
                         </tr>
                         <tr>
                            <td>Lactation Cookies</td>
                            <td>$</td>
                         </tr>
                    </tbody>
                </table>
        </main>
    )
}



export default Services;