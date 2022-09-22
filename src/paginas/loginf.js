import React, { useState,useEffect } from "react";
import Axios from "../services/Axios";
import {useParams,useNavigate} from 'react-router-dom';
import './loginf.css'

//import {toast} from 'react-toastify';
/*----------------------------------------------------------------------------------------*/

function RegistrarU(){

    const variables={
        usuario: "",
        contraseña: ""
        
      }

const [usuarios, setUsuarios]=useState(variables);
//variabble para comparar el parametro
const params=useParams();

const cambioEstado = (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };
  const guardarUsuarios=async()=>{
    const Guardar=Axios.post('usuario/guardarUsuario', usuarios)
    .then(()=>{
      console.log("Registros guardados exitosamente");
    })
    console.log(Guardar)
    }

       const Enviar = (e) => {
         e.preventDefault();
     guardarUsuarios();
         
       }


       return(
        <div>
        
                    <form onSubmit={Enviar}>
                
                      <div class="mb-3">
                        <h1>INGRESAR LOS SIGUIENTES DATOS</h1>
                        <label for="exampleFormControlInput1" class="form-label">
                          <h2>Usuario</h2>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="usuario"
                          value={usuarios.usuario}
                          onChange={cambioEstado}
                          placeholder="nombre de usuario"
                        />
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          <h2>Contraseña</h2>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="contraseña"
                          value={usuarios.contraseña}
                          onChange={cambioEstado}
                          placeholder="Ingrese su contraseña"
                        />

                      </div>

                      
                      <button type="submit" className="btn btn-primary" href="./registrar">
                        Cancelar
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Guardar
                      </button>


                    </form>
                 </div>
               
            
            )
        }
            
export default RegistrarU


/*----------------------------------------------------------------------------------------*/