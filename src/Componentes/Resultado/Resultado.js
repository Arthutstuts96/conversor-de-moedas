import "./Resultado.css";

export const Resultado = ({resultado}) => {
    if(resultado){
        //funções para calculos
        const valor = resultado.valor;
        const primeiraColuna = resultado.colunaUm;
        const segundaColuna = resultado.colunaDois;
        //Valores do dia 18/06 de testes
        const deRealParaDollar = 0.18;
        const deRealParaEuro = 0.17;
        const deDollarParaEuro = 0.93;
        const deDollarParaReal = 5.44;
        const deEuroParaReal = 5.84;
        const deEuroParaDollar = 1.07;

        function converter(valorInicial, valorFinal){
            if(valorInicial === valorFinal) return valor;
            if(valorInicial === 'Real' && valorFinal === 'Dollar'){
                return (valor * deRealParaDollar).toFixed(2);
            }
            if(valorInicial === 'Real' && valorFinal === 'Euro'){
                return (valor * deRealParaEuro).toFixed(2);
            }
            if(valorInicial === 'Dollar' && valorFinal === 'Real'){
                return (valor * deDollarParaReal).toFixed(2);
            }
            if(valorInicial === 'Dollar' && valorFinal === 'Euro'){
                return (valor * deDollarParaEuro).toFixed(2);
            }
            if(valorInicial === 'Euro' && valorFinal === 'Real'){
                return (valor * deEuroParaReal).toFixed(2);
            }
            if(valorInicial === 'Euro' && valorFinal === 'Dollar'){
                return (valor * deEuroParaDollar).toFixed(2);
            }
        }
        //Componente
        return(
            <section className="container-resultado">
                <h1 className="texto-resultado">A conversão do valor <strong>{valor}</strong> de {primeiraColuna} para {segundaColuna} é</h1>
                <span className="valor-convertido">{converter(primeiraColuna, segundaColuna)}</span>
            </section>
        );
    }
}
