import React, {useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Axios from '../services/Axios';



/*----------------------------------------------------------------------------------------*/
function Terminalbal() {

  const urlImage="http://localhost:4000/imagenes/";

    const [terminales, setTerminales]=useState([]);

    const navigate=useNavigate();

    const buscarTerminal=async()=>{
        const buscar=await Axios.get("terminales/consultarTerminal");
        setTerminales(buscar.data);
        console.log(buscar.data)
    }




    useEffect(()=>{
        buscarTerminal();
    },[])

/*----------------------------------------------------------------------------------------*/

  return (


    <div>
    <div class="row row-cols-1 row-cols-md-4 g-4 p-3">
      {terminales.map((terminal) => {
        return (
          <div class="col">
            <div class="card">
              <img src={urlImage+terminal.filename} class="card-img-top" alt="..."  height="200px" />
              <div class="card-body">
                <h1 class="card-title">{terminal.nombre}</h1>
                <h5 class="card-title">{terminal.telefono}</h5>
                <h5 class="card-title">{terminal.direccion}</h5>
                <p class="card-text">
                <button className="btn btn-primary" onClick={()=>navigate(`/horariocom/${terminal._id}`)}>ACCEDER</button>
                </p>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/Reporte">Comprobante y Cancelaciones</a>
  </li>

</ul>
  </div>
  )
}



/*----------------------------------------------------------------------------------------*/
export default Terminalbal;