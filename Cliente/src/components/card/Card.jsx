import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import {connect} from "react-redux";
import Cards from '../cards/Cards';

export function Card(props) {
    const { onClose, character, myFavorites, addFav, removeFav } = props;
    const {name, status, species, gender, origin, image, id} = character

    const [isFav, setIsFav] = useState(false)

    const handleFavorite = (data) => {
      if (isFav) {
        setIsFav(false)
        removeFav(data)
      }
      else {
        setIsFav(true)
        addFav(data)
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
              <button onClick={()=>handleFavorite(id)}>❤️</button>
          ) : (
              <button onClick={()=>handleFavorite(character)}>🤍</button>
          )
        }
        <button onClick={() => onClose(id)}>X</button>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h2>status: {status}</h2>
        <h2>species: {species}</h2>
        <h2>gender: {gender}</h2>
        <h2>origin: {origin.name}</h2>
        <img src={image} alt='' />
      </div>
    );
  }
const mapDispatchToProps = (dispatch) => {
    return {addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id))
}}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
 