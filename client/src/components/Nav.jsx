import React from 'react'
import {Link} from "react-router-dom";


function Nav() {

    return (
        <div>
            <Link to= '/dogs'> <button>Home</button></Link>
            <Link to = '/dogs/create'> <button> Create</button></Link>
          
        </div>
    )
}

export default Nav