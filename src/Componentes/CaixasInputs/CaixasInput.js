import { useState } from "react";
import "./CaixasInput.css";

export const CaixasInput = ({nomeLabel, pegarValor}) => {
    const [numero, setNumero] = useState(0);

    function atualizarValor(event){
        const valorAtual = event.target.value;
        if(valorAtual >= 0 ){
            setNumero(valorAtual);
        }
        pegarValor(valorAtual)
    }
    return(
        <div className="container-input">
            <label htmlFor={nomeLabel}>{nomeLabel}</label>
            <input 
                value={numero} 
                onChange={(e) => atualizarValor(e)}
                type="number"
                className="caixa-input"
                id={nomeLabel}
            />
        </div>
    );
}
