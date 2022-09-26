import React, { useState,useEffect } from "react";
import Axios from "../services/Axios";
import {useParams,useNavigate} from 'react-router-dom';

import {toast} from 'react-toastify';
/*----------------------------------------------------------------------------------------*/

function Registrar(){

    const variables={
        _id:'',
        matricula:'',
        nombre:'',
        edad:'',
        sexo:'',
        direccion:''
        
      }

const [clientes, setClientes]=useState(variables);
//variabble para comparar el parametro
const params=useParams();
const navigate=useNavigate();

const cambioEstado = (e) => {
    const { name, value } = e.target;
    setClientes({ ...clientes, [name]: value });
  };
  const Guardar=async()=>{
    const guardar=Axios.post('/cliente/guardarCliente',clientes)
    .then(()=>{
      console.log("Registros guardados exitosamente");
    })
    navigate("/");
    }

    const updateCliente=async()=>{
       await Axios.put(`/cliente/updateCliente/${params.id}`,clientes)
       .then(()=>{
          toast("Los datos se han actualizado correctamente",{
            position:"top-right",
            type:"info",
            autoClose:5000
          })
        })
        navigate('/');
      }
      const consultarOne=async(id)=>{
        const consultaUno=await Axios.get('/cliente/consultarUnCliente/'+params.id);
        setClientes(consultaUno.data);
        console.log(consultaUno.data);
      }
/*----------------------------------------------------------------------------------------*/

      
       const Enviar = (e) => {
         e.preventDefault();
     
         if(clientes._id===""){
           Guardar();
         }else{
           updateCliente();
         }
         
       }

       useEffect(() => {
        consultarOne(params.id);
        
       }, [params.id])

/*----------------------------------------------------------------------------------------*/
       return(
        <div className="container-fluid p-4">
              <div class="card">
                <div class="card-header">Registrar cliente</div>
                <div class="card-body">
                  <p class="card-text">
                    <form onSubmit={Enviar}>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          Matricula
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="matricula"
                          value={clientes.matricula}
                          onChange={cambioEstado}
                          placeholder="Num. Matricula"
                        />
                      </div>
        
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          Nombre
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="nombre"
                          value={clientes.nombre}
                          onChange={cambioEstado}
                          placeholder="nombre de la persona"
                        />
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          Edad
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="edad"
                          value={clientes.edad}
                          onChange={cambioEstado}
                          placeholder="Ingresar edad"
                        />
                      </div>
        
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          Sexo
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="sexo"
                          value={clientes.sexo}
                          onChange={cambioEstado}
                          placeholder="Ingrese su genero"
                        />
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          Dirección
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="direccion"
                          value={clientes.direccion}
                          onChange={cambioEstado}
                          placeholder="Ingrese su dirección"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        {clientes._id===""?"Guardar":"actualizar"}
                      </button>
                    </form>
                  </p>
                </div>
              </div>
            </div>
            
          );

}
export default Registrar


/*----------------------------------------------------------------------------------------*/