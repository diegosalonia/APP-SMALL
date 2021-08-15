import React, { createContext, useReducer, useContext } from "react"

export const StateContext = createContext() //inicializamos la manguera de datos

export const StateProvider = ({reducer, initialState, children}) => {// 
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext) // consumir los datos y sus cambios 
