import React, { Fragment } from 'react';

const Data = ({nota}) => {
    return(
    <Fragment>
        <center>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nombre de la Nota</th>
                </tr>
            </thead>
        <tbody><td>{nota.id}</td><td>{nota.titulo}</td></tbody>
        </table>
        </center>
    </Fragment>
    )
};

export default Data;