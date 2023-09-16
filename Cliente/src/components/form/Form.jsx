import React from 'react'
import App from '../../App'
import { useState } from 'react'
import Validation from '../validation/Validation'

export default function Form(props) {

    const {login} = props

    const [error, setError] = useState({
        email: '',
        password: ''
    })

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    //   EJERCICIO 6 | Login
//   ¡Ahora le daremos la funcionalidad de cambiar los permisos a nuestro login!
  
//   Dirígete al archivo App.js y pásale la función login que creaste en el ejercicio anterior al componente Form mediante props.
  
//   En el componente Form crea una función "handleSubmit". Esta función recibe un evento por parámetro. Deberás ejecutas la función e.preventDefault(). Luego ejecuta la función "login" recibida por props. ¡No te olvides de pasarle por parámetro tu estado local userData!
  
//   La función handleSubmit debe ejecutarse cuando se hace click en el botón submit.

    function handleChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setError(Validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
        
        
    
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(userData);

        
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" id="email" value={userData.email} onChange={handleChange} name="email"/>
                {error.email && <p>{error.email}</p>}
                <label>Password</label>
                <input type="password" id="password" value={userData.password} onChange={handleChange} name="password"/>
                {error.password && <p>{error.password}</p>}
                <button>Submit</button>
            </form>
        </div>
    )
}