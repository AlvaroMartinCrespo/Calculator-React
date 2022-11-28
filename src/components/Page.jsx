import React from 'react';
import '../stylesheet/Page.css';
import Calculadora from './Calculadora';
import LayoutIMG from './Layout.jsx';
import Boton from './Boton.jsx';

function Page() {
    return (
        <div className="Page">
            <div className="mainContainerLayout">
                <LayoutIMG />
            </div>
            <div className="mainContainerCalculadora">
                <Calculadora />
            </div>
        </div>
    );
}

export default Page;
