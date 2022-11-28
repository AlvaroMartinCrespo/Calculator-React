import React from 'react';
import '../stylesheet/Calculadora.css';
import Boton from './Boton.jsx';
import Pantalla from './Pantalla';
import BotonClear from './BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculadora() {
  //Agregamos un input inicial que en esta caso estara vacio,
  //y con la función setInput se modificará el valor.
  const [input, setInput] = useState('');

  //Creamos la función a la que vamos a llamar para modificar
  //el valor
  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  //Se crea una función para limpiar la pantalla en la que
  //reestablecemos el input a su valor inicial cuando se le
  //da click al botón clear
  const clearDisplay = () => {
    setInput('');
  };

  const calcularResulado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('No hay valores introducidos');
    }
  };

  return (
    <div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          {/* Llamamos a la función sin parentesis porque queremos
                    pasar la función al componente y no ejecutarla al hacer click */}
          <Boton click={agregarInput}>1</Boton>
          <Boton click={agregarInput}>2</Boton>
          <Boton click={agregarInput}>3</Boton>
          <Boton click={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton click={agregarInput}>4</Boton>
          <Boton click={agregarInput}>5</Boton>
          <Boton click={agregarInput}>6</Boton>
          <Boton click={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton click={agregarInput}>7</Boton>
          <Boton click={agregarInput}>8</Boton>
          <Boton click={agregarInput}>9</Boton>
          <Boton click={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton click={calcularResulado}>=</Boton>
          <Boton click={agregarInput}>0</Boton>
          <Boton click={agregarInput}>.</Boton>
          <Boton click={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear click={clearDisplay}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
