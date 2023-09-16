// ¡Genial! Las funcionalidades ya están. Ahora es momento de contruir nuestro componente Detail. Para esto dirígete a este componente y:

// Importa axios.
// Importa el hook useParams y obten el id del personaje.
// Importa el hook useState y crea un estado local con el nombre "character" que se inicialice como un objeto vacío.
// En este paso importaremos el hook useEffect de react. 
//Una vez importado, copia el siguiente código y pégalo en el cuerpo del componente.

import axios from 'axios';
import { useParams } from 'react-router-dom'

import React,{ useState, useEffect } from 'react'

export default function Detail() {
    const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => setCharacter(res.data))
  }, [id])
// Hola coleguilla
  return (
    <div className='detail'>
      <h1>{character.name ?? "cargando.."}</h1>
      <h2>status: {character.status ?? "cargando.."}</h2>
      <h2>species: {character.species ?? "cargando.."}</h2>
      <h2>gender: {character.gender ?? "cargando.."}</h2>
      <h2>origin: {character.origin?.name ?? "cargando.."}</h2>
      <img src={character.image ?? "cargando.."} alt={character.name} />
    </div>
  )

}