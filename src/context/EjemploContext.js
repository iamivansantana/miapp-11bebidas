import React, { createContext } from 'react'


export const EjemploContext = createContext();

const EjemploProvider = (props) => {
    return ( 
        <EjemploContext.Provider
            value={
                { }
            }
        >
            {props.children}
        </EjemploContext.Provider>
     );
}
 
export default EjemploProvider;