import { useState } from 'react';
import './App.css';
import CaixasInput from './Componentes/CaixasInputs';
import ListaOpcoes from './Componentes/ListaOpcoes';
import { FaCoins } from "react-icons/fa";

function App() {
  const listaMoedas = [
    "",
    "Real",
    "Dollar",
    "Euro"
  ]
  //Pegando os dados
  const [valor, setValor] = useState(0);
  const [primeiraColuna, setPrimeiraColuna] = useState('nada');
  const [segundaColuna, setSegundaColuna] = useState('nada');

  const pegarValor = (dados) => {
    setValor(dados);
  }
  function pegarColuna(selecao, tipo){
    console.log(selecao)
    if(tipo === 'primeira'){
      setPrimeiraColuna(selecao);
    }
    if(tipo === 'segunda'){
      setSegundaColuna(selecao);
    }
  }
  //Função principal app
  return (
    <div className="App">
        <p style={{fontSize: 50, fontFamily: "Arial, sans-serif"}}>
          Conversor de moedas <FaCoins />
        </p>
        <CaixasInput nomeLabel="Valor" pegarValor={pegarValor}/>
        <ListaOpcoes opcoes={listaMoedas} pegarColuna={pegarColuna} coluna='primeira'/>
        <ListaOpcoes opcoes={listaMoedas} pegarColuna={pegarColuna} coluna='segunda'/>
        <p style={{fontSize: 25}}>O valor é {valor}</p>
        <p style={{fontSize: 35}}>O valor da primeira seleção é {primeiraColuna}</p>
        <p style={{fontSize: 35}}>O valor da segunda seleção é {segundaColuna}</p>
    </div>
  );
}

export default App;
