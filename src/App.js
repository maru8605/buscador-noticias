import Header from "./component/Header";
import Form from './component/Form'

function App() {
  return (
    <>
      <Header titulo='Portal de noticias'/>

      <div className='container white'>
        <Form/>
      </div>
    </>

  );
}

export default App;
