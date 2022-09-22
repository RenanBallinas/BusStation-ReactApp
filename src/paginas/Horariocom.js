import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "../services/Axios";

function Horariocom() {

    const urlImage = "http://localhost:4000/imagenes/";
    const [horario, setHorario] = useState([]);

    const navigate=useNavigate();
    const params = useParams();
  
    const consultarHorario = async () => {
        const consultarhorario = await Axios.get(
          "horarios/consultarHorario/" + params.terminalesb);
        setHorario(consultarhorario.data);
        console.log(consultarhorario.data)
      }
  
    useEffect(() => {
        consultarHorario();
    }, []);

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4 e-4">
        {horario.map((horarioc) => {
          return (
            <div class="col position-absolute top-50 start-50 translate-middle">
              <div class="card">
                <img src={urlImage+horarioc.filename} class="card-img-top" alt="..." width="100px" height="250px"/>
                <div class="card-body">
                  <h5 class="card-title">{horarioc.nombre}</h5>
                  <p class="card-text">
                  <button className="btn btn-primary" onClick={()=>navigate()}>RESERVACION</button>
                  <button className="btn btn-danger" onClick={()=>navigate(`/cancelacion/${horarioc._id}`)}>CANCELACIONES</button>
                  </p>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Horariocom