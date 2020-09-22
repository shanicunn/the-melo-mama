import React from 'react';
import melomamalogo from '../assets/images/melomamalogo.png';


export default function Header() {
    return (
        <div className="header">
            <img id="logo" src={melomamalogo} alt="" ></img>
            
            {/* <h1>THE MELO MAMA</h1> */}
        </div>
    )
}