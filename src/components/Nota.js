import React from 'react';

const Nota = ({nota, eliminarNota}) => (
   <div className="nota">
       <p>Titulo: <span>{nota.titulo}</span></p>
       <p>Descripcion: <span>{nota.descripcion}</span></p>

       <button
        className="button eliminar u-full-width"
        onClick={() => eliminarNota(nota.id)}
       >Eliminar &times;</button>
   </div>
);

export default Nota;