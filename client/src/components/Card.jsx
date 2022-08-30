import React from "react";


export default function Card({name, image, id, max_weight,temperament, temperaments}) {
    return (
        <div>
            <h3># {id}</h3>
            <h2>Nombre: {name}</h2>
            <h3>peso: {max_weight}</h3>
            <img src={image} alt="img not found" width="200px" height="250px" />
            <h3>Temperament: {temperament} {temperaments}</h3>
        </div>
    )
}