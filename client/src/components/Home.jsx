import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs, getTemperaments, filterByTemperaments, filterCreated, orderSort } from '../redux/actions';
import { Link } from 'react-router-dom';
import Card from "./Card";
import Pagination from './Pagination'
import SearchBar from "./SearchBar";
import CreateDog from "./CreateDog";

export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs)
    


    const [currentPage, setCurrentPage] = useState(1)
    const dogsPerPage = 8
    const numbersOfLastDog = currentPage * dogsPerPage   //8
    const numberOfFirtsDog = numbersOfLastDog - dogsPerPage //0
    const currentDog = allDogs.slice(numberOfFirtsDog, numbersOfLastDog)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    const temperaments = useSelector ((state) => state.temperaments)
    const [temperament, setTemperament] = useState("All")

    function handleSelect(e){
    e.preventDefault()
    dispatch(filterByTemperaments(e.target.value))
    setTemperament(e.target.value)
    setCurrentPage(1)
    }

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllDogs());
    }

    const [, setBreeds] = useState('All')
    function handleFilterCreated (e){
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
        setBreeds(e.target.value)
    }

    const [,setOrden] = useState('Default')
    function handleSort (e){
        e.preventDefault()
        dispatch(orderSort(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }


    useEffect (() => {
        dispatch (getAllDogs());
        dispatch (filterByTemperaments())
        dispatch (getTemperaments())
    }, [dispatch])




    return (
        <div>
            <Link to = '/dogs/create'> Crear perro
            </Link>
            
            <h1>Vamos perritos!!!!!🐶</h1>
            <button onClick={e => {handleClick(e)}}>
                Volver a cargar todos los perritos
            </button>
            <SearchBar />
            <div>
            <select onChange={e => handleSort(e)}>
                <option value ="default"> Sort by.. </option>
                <option value = "az"> A-Z</option>
                <option value = "za"> Z-A </option>
                <option value = "asc"> Lightest </option>
                <option value = "desc"> Heaviest </option>
            </select>
            </div>
            <div >     
                <select onChange={(e) => {handleFilterCreated(e)}}> 
                    <option value = "all">Breeds</option>
                    <option value = "created">Created Breeds</option>
                    <option value = "api"> Api Breeds</option>
                </select>
            <select value = {temperament} onChange = {(e)=> handleSelect(e)}>
                <option value="All"> Temperaments </option>
                {temperaments.map((temp, index) => (
                    <option onClick = {(e)=> handleClick(e)} key={index}>
                    {temp.name}
                    </option>
                ))}
            </select>
                <Pagination
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginado={paginado}
                />
                {currentDog.map(el=> {
            return(
                <div key={el.id}>
                      <Card
                   name = {el.name.toUpperCase()}
                   id = {el.id}
                   key = {el.id}
                   image = {el.image}
                   min_weight = {el.min_weight}
                   max_weight = {el.max_weight}
                   temperament = {el.temperament}
                    />
                </div>
                
            )
        })
        }
            </div>
        </div>
    )

}