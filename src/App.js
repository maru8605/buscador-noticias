import { useState, useEffect } from "react";
import Header from "./component/Header";
import Form from './component/Form'
import ListadoNoticias from "./component/ListadoNoticias";
function App() {
  // definir categoria y noticia
  const [categoria, guardarCategoria] = useState('')
  // state de noticias
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarApi = async() => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=2279721dbda8445f9472e6291a8db988`
      
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      guardarNoticias(noticias.articles)
    }
    consultarApi()
  }, [categoria])

  return (
    <>
      <Header titulo='Portal de noticias'/>

      <div className='container white'>
        <Form
          guardarCategoria={guardarCategoria}
        />
         <ListadoNoticias noticias={noticias}/>
      </div>
     
    </>

  );
}

export default App;
