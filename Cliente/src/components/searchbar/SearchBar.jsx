import React,{useState} from 'react';




export default function SearchBar(props) {
    const {onSearch} = props;

    const [id, setId] = useState("")

    function handleChange(e) {
        e.preventDefault();
        setId(e.target.value)
    }
    
    // acá va tu c�digo...
    // tip, podés usar un useState...
    return (
       <div>
          <input type='search' value={id} onChange={handleChange} placeholder='Search...'/>
          <button onClick={() => onSearch(id)}>Agregar</button>
       </div>
    );
 }