import React from "react";
import './styles/Pagination.css'

export default function Paginado ({dogsPerPage, allDogs, paginado}) {
    const pageNumber = []

    for ( let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className="lista1">
                {pageNumber?.map(number => (
                    <li key={number}>
                        <button className="listabtn" onClick={() => paginado(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )

}