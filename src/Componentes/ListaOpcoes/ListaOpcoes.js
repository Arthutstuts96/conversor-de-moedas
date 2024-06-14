import "./ListaOpcoes.css";

export const ListaOpcoes = ({opcoes, pegarColuna, coluna}) => {
    return(
        <select className="lista-opcoes" onChange={(event) => pegarColuna(event.target.value, coluna)}>
            {opcoes.map((opcaoAtual) => {
                return <option key={opcaoAtual}>{opcaoAtual}</option>
            })}
        </select>
    );
}