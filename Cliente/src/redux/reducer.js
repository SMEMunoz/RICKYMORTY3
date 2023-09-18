

import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case REMOVE_FAV:
            return {...state, myFavorites: action.payload };
        case FILTER:
            if(action.payload === "All") {return { ...state, myFavorites: state.allCharacters }}
            else{
            const filteredCharacters = state.allCharacters.filter(character => character.gender === action.payload);  
            return { ...state, myFavorites: filteredCharacters }}  

        case ORDER:
            let ordenados
            if(action.payload === "Ascendente"){
                ordenados = state.myFavorites.sort((a,b) => a.id > b.id ? 1 : -1)
            }
            else ordenados = state.myFavorites.sort((a,b) => b.id > a.id ? 1 : -1)
            return {...state, myFavorites: [...ordenados]}
       
        default:
            return state;
    
    
}}

