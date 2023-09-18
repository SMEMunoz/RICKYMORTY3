import axios from "axios"

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export const addFav = (character) => {
   
    try {
        console.log("viejo a ver si esto soluciona:" + character)
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            const { data } = await axios.post(endpoint, character);
            return dispatch({
               type: 'ADD_FAV',
               payload: data,
           });
       } }
    catch (error) {
           console.error('Error al agregar a favoritos:', error);
       }
};


 export const removeFav = (id) => {
    try{
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return async (dispatch) => {
            const {data} = await axios.delete(endpoint);
            console.log("esta es mi data:" + JSON.stringify(data))
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
        });
       }}
       catch(error){console.error('Error al eliminar de favoritos:', error);
       }
 };

export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender,
    }
}

export const orderCards = (order) => {
    return {
        type: 'ORDER',
        payload: order,
    }
}


