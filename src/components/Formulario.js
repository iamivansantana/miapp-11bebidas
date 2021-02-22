import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext';


const Formulario = () => {

    const { categoria } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
    

    const [busqueda,guardarBusqueda]=useState({
        nombre: '',
        categoria: ''
    });

    //Funcion para leer los contenidos
    const obtenerDatosReceta = e =>{
        guardarBusqueda({
            ...busqueda,[e.target.name] : e.target.value 
        })
    }

    return (
        <>
            <form 
                className="col-12"
                onSubmit={e =>{
                    e.preventDefault();
                    buscarRecetas(busqueda);
                    guardarConsultar(true);
                }}
            >
                <fieldset className="text-center">
                    <legend>Busca Bebidas por Categoría o Ingrediente</legend>
                </fieldset>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <input 
                            className="form-control"
                            name="nombre"
                            type="text"
                            placeholder="Buscar por Ingrediente"
                            onChange={obtenerDatosReceta}
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            className="form-control"
                            name="categoria"
                            onChange={obtenerDatosReceta}
                        > 
                             <option value=""> - Selecciona Categoría - </option>
                             {categoria.map(cat=>(
                                <option 
                                    key={cat.strCategory} 
                                    value={cat.strCategory}
                             >{cat.strCategory}</option>   
                             ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input 
                            type="submit"
                            className="btn btn-block btn-primary"
                            value="Busacar Bebidas"
                        />
                    </div>
                </div>
            </form> 
        </>
    )
}

export default Formulario
