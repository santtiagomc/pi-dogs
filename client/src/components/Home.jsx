import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs } from '../redux/actions';
import { Link } from 'react-router-dom';
import Card from "./Card";

export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs)


    const [currentPage, setCurrentPage] = useState(1)
    const dogsPerPage = 8
    const numbersOfLastDog = currentPage * dogsPerPage   //8
    const numberOfFirtsDog = numbersOfLastDog - dogsPerPage //0
    const currentDog = allDogs.slice(numberOfFirtsDog, numbersOfLastDog) 


    useEffect (() => {
        dispatch (getAllDogs());
    }, [dispatch])


    function handleClick(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }


    return (
        <div>
            <Link to = '/create'>Crear perrito</Link>
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
                {currentDog.map(el=> {
            return(
                <div key={el.id}>
                      <Card
                   name = {el.name.toUpperCase()}
                   id = {el.id}
                   key = {el.id}
                   image = {el.image}
                   weight = {el.weight.imperial}
                   height = {el.height.imperial}
                    />
                   </div>
            )
        })
        }
            </div>
        </div>
    )

}