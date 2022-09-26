import React from 'react'
import imagenpng from '../img/Logotipo.png'

export default function barraMenu() {

  return (
<div>

    <nav class="navbar navbar-dark bg-primary p-3">
        <div class="container-fluid">
        <img src={imagenpng}  width="150" height="70"/>
        <a class="navbar-brand fs-1">BUSSTATION
        
        </a>

            <div class="d-flex flex-row-reverse">
                <div class="p-2">

                <button type="button" class="btn btn-dark">CERRAR SESION</button>

                </div>

            </div>

        </div>

    </nav>
</div>

  )
}

