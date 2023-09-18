import './App.css';
import Card from './components/card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchbar/SearchBar.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/detail/Detail.jsx';
import Favorites from './components/favorites/Favorites';
import About from './components/about/About';
import Form from './components/form/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();



  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    const response = await axios((`${URL}?email=${email}&password=${password}`))
    const data = response.data
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    
 }

    useEffect(() => {
        !access && navigate('/');
     }, [access]);


  async function onSearch(id) {

    
    
    try{
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const data = response.data;
      if (data) {   

        const characterExists = characters.some((character) => character.id === data.id);
        if (!characterExists) {
            setCharacters((oldChars) => [...oldChars, data]);
        } else {
            window.alert('¡Este personaje ya está en la lista!');
        }
    } else {
        window.alert('¡No hay personajes con este ID!');
    }}
    catch(error){
        console.error('Error al buscar el personaje:', error)
    }
        
        
            
        }

 function onClose(id){
  const newCharacters = characters.filter((character) => character.id !== Number(id));
   setCharacters(newCharacters);
 }

   return (
      <div className='App'>
         {location.pathname !== "/" && < Nav onSearch={onSearch}/>}
         
        <Routes>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail />}/>  
        </Routes>    
      </div>
   );
}
// que ostion me e llevado
export default App;