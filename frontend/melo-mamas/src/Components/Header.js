import React from 'react';
import melomamalogo from '../assets/images/melomamalogo.jpeg';

export default function Header() {
    return (
        <div className="header">
            <img src={melomamalogo} alt="" ></img>
            {/* <h1>THE MELO MAMA</h1> */}
        </div>
    )
}