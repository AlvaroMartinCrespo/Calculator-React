import React from 'react';
import '../stylesheet/Boton.css';

function Boton({ children, click }) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== '.' && valor !== '=';
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(children) ? 'operador' : ''
      }`.trimEnd()}
      onClick={() => click(children)}
    >
      {children}
    </div>
  );
}

export default Boton;
