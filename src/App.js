import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario'
import Nota from './components/Nota';
import Data from './components/Data'

function App() {

  let notasIniciales = JSON.parse(localStorage.getItem('notas'));
  if (!notasIniciales) {
    notasIniciales=[];
  }

  const [notas, guardarNotas] = useState([]);

  useEffect(() =>{
    let notasIniciales = JSON.parse(localStorage.getItem('notas'));
    if (notasIniciales) {
      localStorage.setItem('notas', JSON.stringify(notas));
    } else {
      localStorage.setItem('notas', JSON.stringify([]));
    }
  })

  const crearNota = nota =>{
    guardarNotas([
      ...notas,
      nota
    ])
  }

  //funcion que elimina una cita por ID
  const eliminarNota =id=>{
    const nuevasNotas = notas.filter(nota=> nota.id !== id);
    guardarNotas(nuevasNotas);
  }

const encabezado = notas.length === 0 ? 'No hay notas' : 'Administra tus Notas'

  return (
    <Fragment>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario
            crearNota={crearNota}
          /> 
        </div>
        <div className="one-half column">
          <h1>{encabezado}</h1>
          {notas.map(nota =>(
            <Nota
              key={nota.id}
              nota={nota}
              eliminarNota={eliminarNota}
            />
          ))} 
        </div>
      </div>
    </div>
    <div>
      {notas.map(nota=>(
        <Data
          key={nota.id}
          nota={nota}
        />
      ))}
    </div>
    </Fragment>
  );
}

export default App;
