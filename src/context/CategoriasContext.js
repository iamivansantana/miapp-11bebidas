import Axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

//Crear el context
export const CategoriasContext = createContext();

//Provider es donde se encientran las funciones y states
const CategoriasProvider = (props) =>{
    
    //Crear el state del context
    const[ categoria, guardarCategoria ] = useState([]);

    //ejecutar llamado a la API
     useEffect(()=>{
        const obtenerCategorias = async ()=>{

            const url =`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            
            const categorias = await Axios.get(url);
            guardarCategoria(categorias.data.drinks);
        };
        obtenerCategorias();
    },[]);

    return(
        <CategoriasContext.Provider
            value={
                {categoria}
            }
        >
           {props.children} 
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;