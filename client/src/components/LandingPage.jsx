import React from "react";
import { Link } from 'react-router-dom';

export default function LandingPage (){
    return (
        <div>
            <h1>Bienvenidos a la pagina de Dogs!!</h1>
            <Link to = '/dogs'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}