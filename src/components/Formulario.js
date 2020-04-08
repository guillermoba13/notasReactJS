import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';

const Formulario = ({crearNota}) => {

const [nota, actualizarNota] = useState({
    titulo:'',
    descripcion:''
})

const [error, actualizarError] = useState(false);

const actualizarState = e=>{
    actualizarNota({
        ...nota,
        [e.target.name]:e.target.value
    })
}
const {titulo, descripcion} = nota;

const submitNota = e =>{
    e.preventDefault();
    if (titulo.trim() === '' || descripcion.trim() === '') {
        actualizarError(true);
        return;
        
    } else {
        actualizarError(false);
    }

    nota.id = uuid();
    crearNota(nota);
    actualizarNota({
        titulo:'',
        descripcion:''
    })
}
    return (
        <Fragment>
            <h2>Crear Nota</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={submitNota}>
                <label>Titulo:</label>
                    <input
                        type="text"
                        name="titulo"
                        className="u-full-width"
                        placeholder="Titulo..."
                        onChange={actualizarState}
                        value={titulo}
                    />
                <label>Descripcion</label>
                    <textarea
                        name="descripcion"
                        className="u-full-width"
                        placeholder="Escribe..."
                        onChange={actualizarState}
                        value={descripcion}
                    ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Nota</button>
            </form>
        </Fragment>
    );
};

export default Formulario;