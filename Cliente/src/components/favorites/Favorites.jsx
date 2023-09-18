
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards  } from "../../redux/actions";
import Card from "../card/Card";

export function Favorites({myFavorites}) {

    // const myFavorites = useSelector(state => state.myFavorites)

    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>
                {myFavorites.map(character => (
                    <Card key={character.id}  character={character}/>
                    ))}
        </div>
    )

}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)

