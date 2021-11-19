import React,{useEffect, useState} from "react";
import { helpHttp } from "../Helpers/helphttp";
import AplicacionCrudForm from "./AplicacionCrudForm";
import AplicacionCrudTable from "./AplicacionCrudTable";


const ApiCrud = () => {
    const [db,setDb] = useState([]);

    const [dataToEdit,setDataToEdit] = useState(null);

    const [error,setError] = useState(null);
   
    const [loading, setLoading] = useState(false);

    let api= helpHttp(); //invoca al helper para Simplificar el llamado.
    let url= "http://localhost:5000/equipos"; //define el endpoint

    //se manda la respuesta a la interfaz
    //se llama al metodo GET del servicio/helper creado
    //la variable setLoading se inicializa en true para visualizar  al terminar el GET cambia a false
    
    useEffect(()=>{
        
            setLoading(true);
         
            helpHttp().get(url).then((res)=>{
        
                if(!res.err){
                    setDb(res)
        
                    setError(null);
                }else{
                    setDb(null);
                    setError(res)
                }
                    setLoading(false);
            });
            },[url]);
    

    const createData =(data)=>{
        data.id= Date.now(); 
        let options={
            body:data,
            headers:{"content-type":"application/json"},
        };
        api.post(url,options).then(res=>{
            console.log(res);
            if(!res.err){
                setDb([...db,res ])
            }else{
                setError(res);
            }
        });
        
        //trae la base de datos inicial

    };
    const updateData =(data)=>{
        let endpoint =`${url}/${data.id}`;
        console.log(endpoint);

        let options={
            body:data,
            headers:{"content-type":"application/json"},
        };
        api.put(endpoint,options).then((res)=>{
            console.log(res);
            if(!res.error){
                let newData= db.map(el=>el.id ===data.id? data:el);
                setDb([...db,res ]);
                setDb(newData);
            }else{
                setError(res)
            }
            
        });
        

    };
  

    const deleteData = (id) => {
      let isDelete = window.confirm(`¿Estás seguro de eliminar el equipo con el id '${id}'?`);
      if (isDelete) {
          let endpoint = `${url}/${id}`;
          let options = {
          headers: { "content-type": "application/json" },
        };
  
        api.del(endpoint, options).then((res) => {
          
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
      } else {
        return;
      }
    };

    return(
        <div>
            <h2> INFO DE LOS QUIPOS DE FÚBOL MAS FAMOSOS</h2>
            <AplicacionCrudForm
            createData = {createData}
            updateData = {updateData}
            dataToEdit = {dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            {loading} 
            {error}
            <AplicacionCrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
            />

        </div>
    )

}

export default ApiCrud;