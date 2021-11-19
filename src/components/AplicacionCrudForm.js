
import React,{useState,useEffect} from "react";


const initialForm = {
    equipo: "",
    colores: "",
    fundacion: "",
    origen: "",
    id:null,
};

const AplicacionCrudForm =({createData,updateData,dataToEdit,setDataToEdit}) =>{ 
    const [form,setForm]= useState(initialForm);

    useEffect(()=>{//actualiza eñ esta del formulario con los datos a editar
        if(dataToEdit){
            setForm(dataToEdit);//Asigna al formulario los datos del registro a editar
        }else{
            setForm(initialForm);
        }
    },[dataToEdit]);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.equipo||!form.colores||!form.fundacion||!form.origen){
            alert ("Datos incompletos");
            return;
        }
        if (form.id===null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    }
    
    
    
    const handleReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }
    return(
        <div>
            <h3>{dataToEdit? "Editar":"Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="equipo" placeholder="Nombre Equipo" onChange={handleChange} value={form.equipo}/>
                <input type="text" name="colores" placeholder="Colores" onChange={handleChange} value={form.colores}/>
                <input type="text" name="fundacion" placeholder="Año fundación" onChange={handleChange} value={form.fundacion}/>
                <input type="text" name="origen" placeholder="Origen" onChange={handleChange} value={form.origen}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    )
};
export default AplicacionCrudForm;