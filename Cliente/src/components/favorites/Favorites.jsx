
import { Connect } from "react-redux";
import { Card } from "../card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards  } from "../../redux/actions";

export function Favorites({myFavorites}) {

    // Dirígete a tu componente Favorites. Dentro de él deberás:

    // Crea una etiqueta select. Dentro de este selector:
    
    // Crea una etiqueta option con el atributo value igual a "A" (ascendente).
    // Crea una etiqueta option con el atributo value igual a "D" (descendente).
    // <option value="Ascendente">Ascendente</option>
    // Crea una segunda etiqueta select. Dentro de este selector deberás:
    
    // Crear 4 etiquetas option. Cada una con su atributo value igual a los siguientes valores: 
    //Male, Female, Genderless y unknown.
    // <option value="Male">Male</option>
    // [NOTA]: ten en cuenta que la propiedad unknown debe escribirse en minúsculas, 
    //ya que esa el la forma como proviene de la API.
    
    // Importa las actions que creaste en esta homework y el hook useDispatch.
    
    // Crea una función llamada handleOrder. En su interior solo debe despachar 
    //la action orderCards pasándole como argumento e.target.value.
    
    // Crea una función llamada handleFilter. En su interior solo debe despachar la action 
    //filterCards pasándole como argumento e.target.value.

    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    
    // Agrega el atributo onChange a las etiquetas select pasándoles las funciones correspondientes a cada una.

    return (
        <div>
            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>
            {myFavorites.map((character) => (
                <Card key={character.id} character={character}/>
            ))}
        </div>
    )

}

export function mapStateToProps(){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)

