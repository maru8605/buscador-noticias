import {useState} from 'react'

const useSelect = (stateInicial, opciones) => {
   
    const [state, guardarState] =  useState(stateInicial)

    const SelectNews = () => (
        <select
         className=' browser-default'
         value={state}
         onChange={e => guardarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )
    return [state, SelectNews]
}

export default useSelect
