import React from 'react';
import SearchBar from '../searchbar/SearchBar';
import { Link } from 'react-router-dom';

export default function Nav(props){

    const {onSearch}=props

    return(<div>
        <div> 
        // Crea un botón en tu Nav con el texto "Favorites" que te redirija a esta ruta.
        <Link to="/favorites"><button>Favorites</button></Link>
        <Link to="/home"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/"><button>Log Out</button></Link>
        </div>
        <SearchBar onSearch={onSearch}></SearchBar>
        <button onClick={() => onSearch(Math.floor(Math.random() * 826))}>Random</button>
        </div>
    )
}