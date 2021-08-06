import React from 'react'
import styles from './form.module.css'
import useSelect from '../Hooks/useSelect'


const Form = ( {guardarCategoria} ) => {

    const OPCIONES = [
        {value:'general', label:'General'},
        {value:'business', label:'Negocios'},
        {value:'entertainment', label:'Entretenimiento'},
        {value:'health', label:'Salud'},
        {value:'science', label:'Ciencia'},
        {value:'sports', label:'Deportes'},
        {value:'technology', label:'Tecnología'}
    ]

    const [ categoria, SelectNews ] = useSelect('general', OPCIONES)

    // submit al form, pasar cat a App
    const buscarNoticias = (e) => {
        e.preventDefault();

        guardarCategoria(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                    
                    <SelectNews/>

                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            value='Buscar'
                            className={`${styles['btn-block']}  btn-large `}
                        />
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default Form
