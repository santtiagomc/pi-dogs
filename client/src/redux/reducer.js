import { GET_ALL_DOGS, GET_TEMPERAMENT, GET_NAME_DOG, FILTER_BY_TEMPERAMENTS, FILTER_CREATED} from './actions'

const initialState = {
    dogs: [],
    filterDogs: [],
    temperaments: [],
}

function rootReducer (state = initialState, action){
    switch(action.type){
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
                filterDogs: action.payload
            }
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperaments: action.payload
            }

        case GET_NAME_DOG:
            return {
                ...state,
                dogs: action.payload
            }

        case FILTER_BY_TEMPERAMENTS:
            const allDogs = state.filterDogs;
            const temperamentFilter = 
            action.payload === 'All' ? allDogs
            : allDogs.filter((e)=>
            e.temperament?.includes(action.payload))              
            return {
                ...state,
                dogs: temperamentFilter,
            
            }
        
        case FILTER_CREATED:
            const allDogsCreated = state.filterDogs
            const createdFilter = action.payload === 'created' ?
            allDogsCreated.filter((e) => e.createdInDataBase)
            : action.payload === 'api' ?
            allDogsCreated.filter((e) => !e.createdInDataBase)
            : action.payload === 'all' &&
            allDogsCreated
                return {
                    ...state,
                    dogs: createdFilter,
                    
            }

        default:
            return state
            
    }
}


export default rootReducer;