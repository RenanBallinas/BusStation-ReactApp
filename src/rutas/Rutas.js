import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layouts from '../components/layouts/Layouts';

import Home from '../inicio/Home';
import NotFound from '../inicio/NotFound';
import Fcliente from '../paginas/Fcliente';
import Horariocom from "../paginas/Horariocom";
import Terminalbal from "../paginas/Terminalbal";
import Cancelaciones from "../paginas/Cancelaciones";

function Rutas(){
    return (

        <div>
            <Router>
            <Layouts>
                    <Routes>
                        <Route exact path='/home' element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                        <Route exact path="/" element={<Terminalbal/>}/>
                        <Route exact path='/horariocom/:terminalesb' element={<Horariocom/>}/>
                        <Route exact path='/cancelacion/:id' element={<Cancelaciones/>}/>
                        <Route exact path='/fcliente' element={<Fcliente/>}/>
                        <Route exact path='/fcliente/:id' element={<Fcliente/>}/>
                    </Routes>
                    </Layouts>
            </Router>
        </div>

    )

}
export default Rutas;