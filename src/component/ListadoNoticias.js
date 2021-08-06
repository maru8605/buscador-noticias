import React from 'react'
import './ListadoNoticias.css'
import Noticia from './Noticia'


const ListadoNoticias = ({noticias}) => {
    return (
        <div className='row contenedor-noticias'>
            {noticias.map( noticia => 
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            )}
        </div>
    )
}

export default ListadoNoticias
