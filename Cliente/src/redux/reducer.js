// Dirígete a tu archivo reducer.js. Allí deberás:

// Crear un initialState con una propiedad llamada "myFavorites". Esta propiedad será un arreglo vacío.

// Luego deberás crear tu reducer. Recuerda que este recibe dos parámetros y que dentro de él hay un switch.

// [NOTA]: ten en cuenta el modo en el que lo exportas, y cómo lo importas dentro de tu store.

// Crea un primer caso llamado "ADD_FAV" en el que puedas agregar a un personaje 
//que recibes por payload a tu estado "myFavorites".

// Crea otro caso llamado "REMOVE_FAV" en el que puedas eliminar a un 
//personaje de tu estado "myFavorites" a partir de un id que recibas por payload.

// [NOTA]: ten en cuenta que el id que recibes por payload es un string, y el id de los personajes es un número.

// No te olvides de tu caso default.

import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case 'REMOVE_FAV':
            return { ...state, myFavorites: payload };
        case 'FILTER':
            const filteredCharacters = state.allCharacters.filter(character => character.gender === action.payload);  
            return { ...state, myFavorites: filteredCharacters };  

        // Crea un nuevo caso con el nombre "ORDER". 
//Aquí vamos a ordenar nuestros personajes favoritos de forma ascendente y descendente. Para esto:

// Crea una copia de tu estado global allCharacters.
// Utiliza el método sort para ordenar tus personajes de acuerdo a su id.
// Si el payload es igual a "A", los personajes deben ordenarse de menor a mayor.
// Si el payload es igual a "D, los personajes deben ordenarse de mayor a menor.
// Finalmente retorna tu estado global y en la propiedad myFavorites guarda el ordenamiento que hiciste.
// [NOTA]: investiga en la web cómo funciona el método sort.
        case 'ORDER':
            let ordenados
            if(action.payload === 'A'){
                ordenados = state.allCharacters.sort((a,b) => a.id > b.id ? 1 : -1)
            }
            else ordenados = state.allCharacters.sort((a,b) => a.id < b.id ? 1 : -1)
            return {...state, myFavorites: ordenados}
       
        default:
            return state;
    
    
}}

// Dirígete al archivo reducer y sigue estos pasos:

// En tu estado inicial crea una nueva propiedad llamada allCharacters que debe ser igual a un arreglo vacío.

// Modificaremos el caso ADD_FAV de la siguiente manera:

// Dentro de la copia de tu estado global, reemplaza la propiedad myFavorites por allCharacters.
// Cuando retornes tu estado, agrega la propiedad allCharacters que 
//también sea igual a la copia en la que agregaste el nuevo personaje.

// Crea un nuevo caso con el nombre "FILTER". 
//Aquí debes crear una copia de tu estado global allCharacters. 
//A partir de esta copia filtra todos aquellos personajes que tengan el mismo género que recibes por payload. 
//Finalmente retorna una copia de tu estado, pero que la propiedad myFavorites sea igual a este filtrado.

