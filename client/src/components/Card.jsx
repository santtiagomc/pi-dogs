import React from "react";
import { Link } from "react-router-dom";
import style from './styles/Card.module.css'


export default function Card({name, image, id, max_weight,temperament, temperaments}) {
    return (
        <div className={style.card}>
            <Link to ={`/dogs/${id}`}>
                <h3> {id}</h3>
                <h3 className={style.name}>Nombre: {name}</h3>
                <h3>peso: {max_weight}</h3>
                <img className={style.img} src={image} alt="img not found" width="200px" height="250px" />
                <h3>Temperament: {temperament} {temperaments}</h3>
            </Link>
        </div>
    )
}