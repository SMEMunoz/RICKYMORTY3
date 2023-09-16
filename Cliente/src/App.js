import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail.jsx';
import About from './components/About';
import Form from './components/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';






 

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();



  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'aeroxxdsg@gmail.com';
  const PASSWORD = 'sergiomatias1';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
    }
    }

    useEffect(() => {
        !access && navigate('/');
     }, [access]);


  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
            if (data.name) {
                
                const characterExists = characters.some((character) => character.id === data.id);
                if (!characterExists) {
                    setCharacters((oldChars) => [...oldChars, data]);
                } else {
                    window.alert('¡Este personaje ya está en la lista!');
                }
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
        })
        .catch((error) => {
            console.error('Error al buscar el personaje:', error);
        });
}

 function onClose(id){
  const newCharacters = characters.filter((character) => character.id !== Number(id));
   setCharacters(newCharacters);
 }

   return (
      <div className='App'>
         {location.pathname !== "/" && < Nav onSearch={onSearch}/>}
         
        <Routes>
        <Route path='/favorites' element={<Card characters={characters} onClose={onClose}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/detail/:id" element={<Detail />}/>  
        </Routes>    
         
         
      </div>
   );
}
// que ostion me e llevado
export default App;