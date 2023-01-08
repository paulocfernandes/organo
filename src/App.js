
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CamspoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder="Informe endereço da imagem"/>
    
    </div>
  );
}

export default App;
