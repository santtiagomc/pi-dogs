import React from "react";


export default function Card({name, image, id, weight, temperament}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{id}</p>
            <p>{weight}</p>
            <p>{temperament}</p>
            <img src={image} alt="img not found" width="200px" height="250px" />
        </div>
    )
}