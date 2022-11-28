import React from 'react';
import cocacolaLogo from '../img/img.png';
import '../stylesheet/Layout.css';

function LayoutIMG() {
    const code1 = '<';
    const code2 = ' />';
    const name = 'AMC';
    return (
        <div className="cocacola-logo-contenedor">
            <div className="contenedor">
                <p>
                    <span className="blueSpan">{code1}</span>
                    <span>{name}</span>
                    <span className="greenSpan">{code2}</span>
                </p>
            </div>
        </div>
    );
}

export default LayoutIMG;
