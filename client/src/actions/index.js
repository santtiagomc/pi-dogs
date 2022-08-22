import axios from "axios";


export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const ORDER_SORT = "ORDER_SORT"

export function getAllDogs() {
    return async function(dispatch){
        try {
            var json = await axios("http://localhost:3001/dogs");
            return dispatch({
                type: GET_ALL_DOGS,
                payload: json.data
            })
        } catch(error) {
            alert("Charge failled")
        }
    }
}

export function orderSort(payload){
    return {
        type: ORDER_SORT,
        payload
    }
}