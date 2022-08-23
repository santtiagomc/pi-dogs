import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs } from '../redux/actions';
import { Link } from 'react-router-dom';
import Card from "./Card";

export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs)

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }

    useEffect (() => {
        dispatch (getAllDogs());
    }, [dispatch])

    return (
        <div>
            <Link to = '/dogs'>Crear perrito</Link>
            <h1>Vamos perritos!!!!!🐶</h1>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar todos los perritos
            </button>
            <div>
            <select>
                <option value ="default"> Sort by.. </option>
                <option value = "az"> A-Z</option>
                <option value = "za"> Z-A </option>
                <option value = "asc"> Lightest </option>
                <option value = "desc"> Heaviest </option>
            </select>
            </div>
            <div >     
                <select> 
                    <option value = "all">Breeds</option>
                    <option value = "created">Created Breeds</option>
                    <option value = "api"> Api Breeds</option>
                </select>
                {
                    allDogs?.map((el) => {
                        return (
                            <fragment>
                                <Link>
                                <Card
                                    name = {el.name}
                                    image = {el.image}
                                    key = {el.id}
                                    id = {el.id}
                                    weight = {el.weight}
                                    temperament={el.temperament}
                                        />
                                </Link>
                            </fragment>
                        )
                    })
                }
            </div>
        </div>
    )

}