import { useState } from 'react';
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {connect} from "react-redux";
import { useDispatch } from 'react-redux';

// ¡Ahora crearemos un botón para agregar y eliminar a nuestros personajes de los favoritos!

// Conecta esta función con tu componente y recibe ambas funciones despachadoras por props.

// Crea un estado local en tu componente con el nombre isFav e inicialízalo en false.

// Crea una función en el cuerpo del componente llamada handleFavorite. 
//Esta función estará dividida en dos partes:

// Si el estado isFav es true, entonces settea ese estado en false, y 
//despacha la función removeFav que recibiste por props pasándole el id del personaje como argumento.
// Si el estado isFav es false, entonces settea ese estado en true, y 
//despacha la función addFav que recibiste por props, pasándole props como argumento.



export function Card(props) {
    const { onClose, character, myFavorites } = props;
    const dispatch = useDispatch()

    const [isFav, setIsFav] = useState(false)

    const handleFavorite = (data) => {
      if (isFav) {
        setIsFav(false)
        dispatch(removeFav(data))
      }
      else {
        setIsFav(true)
        dispatch(addFav(data))
    }}

    useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
    
  
    return (
      <div>
                {
          isFav ? (
              <button onClick={()=>handleFavorite(character.id)}>❤️</button>
          ) : (
              <button onClick={()=>handleFavorite(character)}>🤍</button>
          )
        }
        <button onClick={() => onClose(character.id)}>X</button>
        <Link to={`/detail/${character.id}`}>
          <h2>{character.name}</h2>
        </Link>
        <h2>status: {character.status}</h2>
        <h2>species: {character.species}</h2>
        <h2>gender: {character.gender}</h2>
        <h2>origin: {character.origin.name}</h2>
        <img src={character.image} alt='' />
      </div>
    );
  }

  //Aquí deberás crear una función mapDispatchToProps que contenga dos funciones. 
//Esta debe despachar las dos actions que creaste anteriormente (por lo que deberás importarlas).

export function mapDispatchToProps(dispatch) {
  dispatch(addFav)
  dispatch(removeFav)
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
 