import React from "react";


export default function Card({name, image, id, weight, height ,temperament, life_span}) {
    return (
        <div>
            <h3># {id}</h3>
            <h2>Nombre: {name}</h2>
            <h3>peso: {weight}</h3>
            <img src={image} alt="img not found" width="200px" height="250px" />
            <h3>Temperament: {temperament}</h3>
        </div>
    )
}