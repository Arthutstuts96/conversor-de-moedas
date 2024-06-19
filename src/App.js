import './App.css';
import { FaCoins } from "react-icons/fa";
import Formulario from './Componentes/Formulario';
import Resultado from './Componentes/Resultado';
import { useState } from 'react';

function App() {
  const [valorResultado, setValorResultado] = useState(null);
  //funções
  function aoSubmeter(valor, selecaoUm, selecaoDois, event){
    event.preventDefault();
    enviarValoresParaResultado(valor, selecaoUm, selecaoDois);
  }
  function enviarValoresParaResultado(valor, colunaUm, colunaDois){
    const valores = {
      valor: valor,
      colunaUm: colunaUm,
      colunaDois: colunaDois
    }
    setValorResultado(valores);
  }
  //Função principal app
  return (
    <div className="App">
        <p style={{fontSize: 50, fontFamily: "Arial, sans-serif", padding: 12}}>
          Conversor de moedas <FaCoins />
        </p>
        <Formulario aoSubmeter={aoSubmeter} />
        <Resultado resultado={valorResultado}/>
    </div>
  );
}

export default App;
