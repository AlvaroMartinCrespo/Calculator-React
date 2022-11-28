import React from 'react';
import '../stylesheet/BotonClear.css';

const BotonClear = ({ children, click }) => (
  <div className="boton-clear" onClick={() => click()}>
    {children}
  </div>
);

export default BotonClear;
