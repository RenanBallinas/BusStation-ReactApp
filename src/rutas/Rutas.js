import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layouts from '../components/layouts/Layouts';

import Home from '../inicio/Home';
import NotFound from '../inicio/NotFound';
import Fcliente from '../paginas/Fcliente';
import Horariocom from "../paginas/Horariocom";
import Terminalbal from "../paginas/Terminalbal";
import Asientos from "../paginas/asientos";
import Reporte from "../paginas/Reporte";

function Rutas(){
    return (

        <div>
            <Router>
            <Layouts>
                    <Routes>
                        <Route exact path='/home' element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route exact path="/" element={<Terminalbal/>}/>
                        <Route exact path="/reporte" element={<Reporte />}/>
                        <Route exact path='/horariocom/:terminalesb' element={<Horariocom/>}/>
                        <Route exact path="/asientos" element={<Asientos />}/>
                        <Route exact path='/fcliente' element={<Fcliente/>}/>
                        <Route exact path='/fcliente/:id' element={<Fcliente/>}/>
                    </Routes>
                    </Layouts>
            </Router>
        </div>

    )

}
export default Rutas;