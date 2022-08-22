import { GET_ALL_DOGS } from '../actions'


const initialState = {
    dogs: [],
    filterDogs: []
}

function rootReducer (state = initialState, action) {
    switch(action.type) {
        case GET_ALL_DOGS:
            return{
                ...state,
                dogs: action.payload,
                filterDogs: action.payload
            } 
        default:
            return state;
    }
}


export default rootReducer;