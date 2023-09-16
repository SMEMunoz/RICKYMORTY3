import React from 'react'

import Form from './Form'

import { useState } from 'react'

export default function Validation(values){
//     En tu componente Form crea un nuevo estado local llamado "errors" que se inicialice como un objeto vacío. Este es el estado que utilizarás para encontrar errores en el formulario.

// Ahora crea un archivo con el nombre "validation.js". Aquí dentro deberás crear una función que valide los siguientes puntos:

// EMAIL

// el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.
// PASSWORD

// la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.

        

        
            const errors = {}
            if (!values.email) {
                errors.email = "Email is required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address"
            }
            if (!values.password) {
                errors.password = "Ingresa PASSWORD"
            } else if (values.password.length < 6) {
                errors.password = "PASSWORD debe ser mayor a 6"
            } else if (values.password.length > 15) {
                errors.password = "PASSWORD debe ser menor a 15"
            }
            return errors
        
}

