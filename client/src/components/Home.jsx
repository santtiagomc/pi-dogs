import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs, orderSort } from "../actions";
import { Link } from 'react-router-dom'
import Card from "./Card";

export default function Home () {

    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs)

    const [currentPage, setCurrentPage] = useState(1)
    const dogsPerPage = 8
    const numbersOfLastDog = currentPage * dogsPerPage   //8
    const numberOfFirtsDog = numbersOfLastDog - dogsPerPage //0
    const currentDog = allDogs.slice(numberOfFirtsDog, numbersOfLastDog)
    


    function handleClick(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }

    const [,setOrden] = useState('Default')
    function handleSort (e){
        e.preventDefault()
        dispatch(orderSort(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }

    useEffect (() => {
        dispatch(getAllDogs());
    },[dispatch])


    return (
        <div>
            <Link to= "/create">Crear perro</Link>
            <h1>Vamosss Dogss!!</h1>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar todos los perros
            </button>

            <div>

            <select onChange = {e => handleSort(e)}>
                <option value ="default"> Sort by.. </option>
                <option value = "az"> A-Z</option>
                <option value = "za"> Z-A </option>
                <option value = "asc"> Lightest </option>
                <option value = "desc"> Heaviest </option>
            </select>


            {currentDog.length === 0 ? 
        <div ><img  alt="LOADING" /></div>
        : currentDog.map(el=> {
            return(
                <div key={el.id}>
                      <Card
                   name = {el.name}
                   image = {el.image}
                   key = {el.id}
                   id = {el.id}
                   min_weight = {el.min_weight}
                   max_weight = {el.max_weight}
                   temperaments={el.temperaments?.map((t) => t.name).join(', ')}
                   temperament={el.temperament}
                    />
                   </div>
            )
        })
        }
            </div>
        </div>
    )

}