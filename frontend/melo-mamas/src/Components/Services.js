import React from 'react';

class Services extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            antepartum: 180,
            birth: 180,
            postpartum: 180,

            bellyBind: 30,
            babyWrap: 30,
            bindWithCloth: 110,

            encapsulation: 250,
            framedPlacenta: 270,

            virtual: 225,
            inPerson: 275,
            cookies: 20,
        }
    }
    render() {
        return (
            <main className="services">
            {/* DOULA */}
                <section>
                    <table>
                        <thead> <th><h1>Doula Services </h1></th> <th><h1>Starting Costs</h1></th></thead>
                        <tbody>
                            <tr>
                                 <td>Antepartum</td>
                                 <td>${this.state.antepartum}</td>
                             </tr>
                             <tr>
                                 <td>Birth</td>
                                 <td>${this.state.birth}</td>
                             </tr>
                             <tr>
                                <td>Postpartum</td>
                                <td>${this.state.postpartum}</td>
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
                                 <td>${this.state.bellyBind}</td>
                             </tr>
                             <tr>
                                 <td>Baby Wraps</td>
                                 <td>${this.state.babyWrap}</td>
                             </tr>
                             <tr>
                                <td>Belly Binding With Cloth</td>
                                <td>${this.state.bindWithCloth}</td>
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
                                 <td>${this.state.encapsulation}</td>
                             </tr>
                             <tr>
                                 <td>Framed Placenta and Cord Keepsake</td>
                                 <td>${this.state.framedPlacenta}</td>
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
                                 <td>${this.state.virtual}</td>
                             </tr>
                             <tr>
                                 <td>In Person</td>
                                 <td>${this.state.inPerson}</td>
                             </tr>
                             <tr>
                                <td>Lactation Cookies</td>
                                <td>${this.state.cookies} per dozen</td>
                             </tr>
                        </tbody>
                    </table>
                    ***Domestic shipping costs start at $10
            </main>
        )
    }
    
}



export default Services;