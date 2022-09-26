import React, { useState,useEffect } from "react";
import Axios from '../services/Axios'
import {Link} from 'react-router-dom'
import {useParams,useNavigate} from 'react-router-dom';



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
  const guardarUsuario=async()=>{
    const Guardar=Axios.post('usuario/guardarUsuario',usuarios)
    .then(()=>{
      console.log("Registros guardados exitosamente");
    })
    console.log(Guardar)
    }

      const consultarUnUsuario=async(id)=>{
        const consultaUno=await Axios.get('/usuarios/consultarUnUsuario/'+params.id);
        setUsuarios(consultaUno.data);
        console.log(consultaUno.data);
      }

       const Enviar = (e) => {
         e.preventDefault();
     guardarUsuario();
         
       }

       useEffect(() => {
        consultarUnUsuario(params.id);
        
       }, [params.id])

       return(
        <div>
        
                    <form onSubmit={Enviar}>
                
                      <div class="mb-3">
                        <h1>Sign in</h1>
                        <label for="exampleFormControlInput1" class="form-label">
                          Usuario
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
                          Contraseña
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="contraseña"
                          value={usuarios.contraseña}
                          onChange={cambioEstado}
                          placeholder="Ingrese su contraseña"
                        />

                      </div>

                       <button type="button" class="btn btn-primary"> <Link to="/Terminalbal" class="list-group-item list-group-item-action">Iniciar Sesion</Link></button>
                     

                      <button type="button" class="btn btn-primary"><Link to="/login" class="list-group-item list-group-item-action">Registrate</Link></button>


                    </form>
                 </div>
               
            
            )
        }
            
export default RegistrarU