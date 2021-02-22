import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

//crear context

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //state de lprovider
    const [ idReceta,guardarIdReceta]=useState(null);
    const [ informacion,guardarReceta ] = useState({});

    //Ya que se tiene una receta, se llama a la API
    useEffect(() => {
        
        const obtenerReceta = async ()=>{
            if(!idReceta)return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const respuesta = await Axios.get(url);
            guardarReceta(respuesta.data.drinks[0]);
        }
        obtenerReceta();
        
    }, [idReceta])

    return ( 
        <ModalContext.Provider
            value={
                { guardarIdReceta, informacion, guardarReceta }
            }
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;