import React from "react";

const AplicacionCrudTableRow = ({el, setDataToEdit,deleteData})=>{//destructuracion del obejeto

    let {equipo,colores,fundacion,origen,id} = el;
        return(
            <tr>
                <td>{equipo}</td>
                <td>{colores}</td>
                <td>{fundacion}</td>
                <td>{origen}</td>
                <td>
                    <button onClick={()=>setDataToEdit(el)}>Editar</button>
                    <button onClick={()=>deleteData(id)}>Eliminar</button>
                </td>

            </tr>   
    );
};
export default AplicacionCrudTableRow;