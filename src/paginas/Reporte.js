import React, { useState, useEffect } from "react";
import Axios from "../services/Axios";

import {useNavigate} from 'react-router-dom';

function Reporte() {
  const [asientos, setAsientos] = useState([]);

  const navigate=useNavigate();

  const consultarAsiento = async () => {
    const buscar = await Axios.get("asientos/consultarAsiento");
    setAsientos(buscar.data);
    console.log(buscar.data);
  };

  const eliminarAsiento = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar el dato?")) {
      const eliminar = await Axios.delete("/asientos/eliminarAsiento/" + id);
      console.log(eliminar);
    }

    consultarAsiento();
  };

  useEffect(() => {
    consultarAsiento();
  }, []);

  return (
    <div>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Terminal</th>
            <th scope="col">Nombre</th>
            <th scope="col">Destino</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Cancelacion</th>
            
          </tr>
        </thead>
        {asientos.map((asientoc) => {
          return (
            <tbody>
              <tr>
                <th>{asientoc.terminal}</th>
                <td>{asientoc.nombre}</td>
                <td>{asientoc.destino}</td>
                <td>{asientoc.fecha}</td>
                <td>{asientoc.hora}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => eliminarAsiento(asientoc._id)}
                  >
                    Cancelar asiento
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Reporte;