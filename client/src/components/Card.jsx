import React from "react";


export default function Card({name, image, id, weight, height ,temperament}) {
    return (
        <div>
            <h3># {id}</h3>
            <h2>Nombre: {name}</h2>
            <h3>peso: {weight}</h3>
            <h3>altura: {height}</h3>
            <img src={image} alt="img not found" width="200px" height="250px" />
        </div>
    )
}