import axios from "axios";

export function getDogs() {
    return async function(dispatch){
        try {
            var json = await axios.get ("http://localhost:3001/dogs");
            return dispatch({
                type: 'GET_ALL_DOGS',
                payload: json.data
            })
        } catch (error) {
            alert("Charge failed")
        }
    }
}