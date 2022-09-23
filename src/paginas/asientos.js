import React, { useState,useEffect } from "react";
import Axios from './Services/Axios';
import {Link} from 'react-router-dom';
import {useParams,useNavigate} from 'react-router-dom';


function Asientos(){

    const variables={
        nombre: "",
        destino: "",
        fecha: "",
        hora:""
        
      }

const [asientos, setAsientos]=useState(variables);
//variabble para comparar el parametro
const params=useParams();

const cambioEstado = (e) => {
    const { name, value } = e.target;
    setAsientos({ ...asientos, [name]: value });
  };
  const guardarAsientos=async()=>{
    const Guardar=Axios.post('asientos/addAsientos',asientos)
    .then(()=>{
      console.log("Asiento reservado exitosamente");
    })
    console.log(Guardar)
    }

      const consultarUnAsientos=async(id)=>{
        const consultaUno=await Axios.get('/asientos/consultarUnAsientos/'+params.id);
        setAsientos(consultaUno.data);
        console.log(consultaUno.data);
      }

       const Enviar = (e) => {
         e.preventDefault();
     guardarAsientos();
         
       }

       useEffect(() => {
        consultarUnAsientos(params.id);
        
       }, [params.id])

       return(
        <div>
        
                    <form onSubmit={Enviar}>
                
                      <div class="mb-3">
                        <h1>Registrar Asiento</h1>
                        <label for="exampleFormControlInput1" class="form-label">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="nombre"
                          value={asientos.nombre}
                          onChange={cambioEstado}
                          placeholder="nombre de usuario"
                        />
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          Destino
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="destino"
                          value={asientos.destino}
                          onChange={cambioEstado}
                          placeholder="Ingrese su lugar de destino"
                        />

                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          Fecha
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="fecha"
                          value={asientos.fecha}
                          onChange={cambioEstado}
                          placeholder="Ingrese la fecha"
                        />

                </div>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">
                          Hora
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          name="hora"
                          value={asientos.hora}
                          onChange={cambioEstado}
                          placeholder="Ingrese la hora"
                        />


                      </div>

                      <button type="submit" className="btn btn-danger">
                        Cancelar
                      </button>

                      <button type="submit" className="btn btn-primary">
                        Reservar
                      </button>

                    </form>
                 </div>
               
            
            )
        }
            
export default Asientos