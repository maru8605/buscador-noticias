import React from 'react'

const form = () => {
    return (
        <div className='row'>
            <div className='col s12 m8 offset-m2'>
                <form>
                    <h2>Encuentra noticias por categoría</h2>

                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            value='Buscar'
                            className='btn-large amber darken-2'
                        />
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default form
