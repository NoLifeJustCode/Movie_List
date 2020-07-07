/**
 * Actions are basically objects and they contain type so using a reducer will match this type by checking if else to find the matching logic the type is 'xxx' then performs logic else returns state as it is
 * 
 */

export const ADD_MOVIES='ADD_MOVIES'
export const ADD_FAVOURITES='ADD_FAVOURITES'
export const REMOVE_FAVOURITES='REMOVE_FAVOURITES'
export const SET_SHOW_FAVS='SET_SHOW_FAVS'
export  function add_movies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}

export  function add_favourites(movie){
    return {
        type:ADD_FAVOURITES,
        movie
    }
}


export  function remove_favourites(movie){
    return {
        type:REMOVE_FAVOURITES,
        movie
    }
}

export  function setShowFavs(val){
    return {
        type:SET_SHOW_FAVS,
        val
    }
}