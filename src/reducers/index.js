import {combineReducers} from 'redux'
import { ADD_MOVIES,ADD_FAVOURITES,REMOVE_FAVOURITES, SET_SHOW_FAVS } from "../actions"



const initMovie={
    list:[],
    favourites:[],
    showfavs:true
}
export  function movies(state=initMovie,action){ //we cannot set state to  just for ease of code to avoid undefines
   switch(action.type){
       case ADD_MOVIES:
        return {
            ...state,
            list:action.movies
        }
        case ADD_FAVOURITES:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITES:
            
                return {
                    ...state,
                    favourites:state.favourites.filter((item)=>{
                        return item!=action.movie
                    })
                }
        case SET_SHOW_FAVS:
            
                    return {
                        ...state,
                       showfavs:action.val
                    }
        default:
            return state
   }

}

const initSearch={
        result:{}
}
export function Search(state=initSearch,action){
    return state
}

const initRoot={
    movies:initMovie,
    search:initSearch
}
export  function rootReducer(state=initRoot,action){

    return {
        movies:movies(state.movies,action),
        search:Search(state.search,action)
    }
}

export default  combineReducers({
    movies,
    Search
})

