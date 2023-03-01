import axios from 'axios';

export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_TEMPERAMENT = "GET_TEMPERAMENT"
export const FILTER_BY_TEMPERAMENTS= "FILTER_BY_TEMPERAMENTS";
export const FILTER_CREATED = "FILTER_CREATED"
export const GET_NAME_DOG = "GET_NAME_DOG"
export const ORDER_SORT = "ORDER_SORT"
export const POST_DOG = "POST_DOG"
export const GET_DETAIL = "GET_DETAIL"
export const DELETE = "DELETE"

const url = "https://dogs-production-f85f.up.railway.app" 

export function getAllDogs () {
    return async function (dispatch){
        try {
            var json = await axios.get(`${url}/dogs`)
            return dispatch ({
                type: GET_ALL_DOGS,
                payload: json.data
            })
         }
        catch(error) {
            alert("Don't have any connections 😫")
        }
     }
};

export function getTemperaments (){
    return async function (dispatch){
        var json = await axios.get(`${url}/temperament`, {});
        return dispatch ({
            type: GET_TEMPERAMENT, 
            payload: json.data
        })
    }
};

export function filterByTemperaments (payload) {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
}

export function filterCreated (payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function orderSort(payload){
    return {
        type: ORDER_SORT,
        payload
    }
}


export function getNameDog (payload) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`${url}/dogs?name=${payload}`);
            return dispatch ({
                type: GET_NAME_DOG,
                payload: json.data
            })
        }
        catch(error) {
            alert("Try another breed")
        }
    }
};

export function postDog (payload) {
    return async function(dispatch){
        try{
            await axios.post(`${url}/dogs`, payload);
            return {
                type: POST_DOG,
                }
        } 
        catch(error){
              alert("Post failed")
        }
    } 
}

export function getDetail(payload){
    return async function(dispatch){
        try{
            var json = await axios.get(`${url}/dogs/${payload}`)
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            });
        }
      catch(error){
        alert("Try another ID")
      }
    }
};

export function deleteDog (payload){
    return async function (dispatch){
        try{
            const response = await axios.delete(`${url}/dogs/${payload}`);
            return {
                type: DELETE,
                payload: response.data
            }
        }
        catch(error){
            console.log(error)
        }
    }
}