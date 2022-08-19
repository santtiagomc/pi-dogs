import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs } from "../actions";
import { Link } from 'react-router-dom'
import Card from "./Card";

export default function Home () {

    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs)

    useEffect (() => {
        dispatch(getAllDogs());
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }

    return (
        <div>
            <Link to= "/dogs">Crear perro</Link>
            <h1>Vamosss Dogss!!</h1>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar todos los perros
            </button>
            <div>
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select>
                    <option value="default"> Sort by...</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                    <option value="asc">Lightest</option>
                    <option value="desc">Heaviest</option>
                </select>

                { allDogs?.map((c) => {
                    return (
                        <fragment className='cartas'>
                            <Link to={"/home/" + c.id}>
                                <Card name={c.name} image={c.img} key={c.id} />
                            </Link>
                        </fragment>
                            
                    )
                })}
            </div>
        </div>
    )

}