import "./Formulario.css";
import CaixasInput from "../CaixasInputs"
import ListaOpcoes from "../ListaOpcoes"
import { useState } from "react";

export const Formulario = ({aoSubmeter}) => {
    const listaMoedas = [
        "",
        "Real",
        "Dollar",
        "Euro"
    ]
    //Pegando os dados
    const [valor, setValor] = useState(0);
    const [primeiraColuna, setPrimeiraColuna] = useState('');
    const [segundaColuna, setSegundaColuna] = useState('');

    const pegarValor = (dados) => {
        setValor(dados);
    }
    function pegarColuna(selecao, tipo){
        if(tipo === 'primeira'){
            setPrimeiraColuna(selecao);
        }
        if(tipo === 'segunda'){
            setSegundaColuna(selecao);
        }
    }
    //Componente em si
    return(
        <form className="formulario" onSubmit={(e) => aoSubmeter(valor, primeiraColuna, segundaColuna, e)}>
            <CaixasInput nomeLabel="Valor" pegarValor={pegarValor}/>
            <ListaOpcoes 
                opcoes={listaMoedas} 
                pegarColuna={pegarColuna} 
                coluna='primeira' 
                obrigatorio={true}
                nomeLabel={'Converter de'}
            />
            <ListaOpcoes 
                opcoes={listaMoedas} 
                pegarColuna={pegarColuna} 
                coluna='segunda' 
                obrigatorio={true}
                nomeLabel={'Para'}
            />
            <button type="submit" className="botao-submit">Calcular</button>
        </form>
    );
}

