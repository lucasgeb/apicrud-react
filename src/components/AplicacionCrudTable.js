import React from "react";
import AplicacionCrudTableRow from "./AplicacionCrudTableRow";

const AplicacionCrudTable = ({data, setDataToEdit, deleteData}) => {
    return(
        <div>
            
            <table>
                <thead>
                    <tr>
                        <th>Equipo</th>
                        <th>Colores</th>
                        <th>Fundación</th>
                        <th>Origen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((el) => (
                        <AplicacionCrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}
                        />
                    ))
                ) : (
                    <tr>
                        <td colSpan="3">Sin datos</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
export default AplicacionCrudTable;