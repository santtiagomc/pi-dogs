import React from 'react'
import {Link} from "react-router-dom";
import style from './styles/Nav.module.css'


function Nav() {

    return (
            <div className={style.container}>
                <Link to= '/dogs'> <button>Home</button></Link>
                <Link to = '/dogs/create'> <button> Create</button></Link>
                <Link to = '/dogs/about'> <button> About</button></Link>
            </div>
    )
}

export default Nav