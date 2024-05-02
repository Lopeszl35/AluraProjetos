const transacoesFinanceiras = [
    { id: 1, valor: 100, tipo: 'entrada' },
    { id: 2, valor: 50, tipo: 'saida' },
    { id: 3, valor: 200, tipo: 'entrada' },
    { id: 4, valor: 80, tipo: 'saida' },
    { id: 5, valor: 150, tipo: 'entrada' }
];


function calcularTransacoes(transacoes) {
    return transacoes.reduce((valoresTotal, transacao) => {
        if(transacao.tipo === 'entrada') {
            valoresTotal.entrada += transacao.valor;
        } else if(transacao.tipo === 'saida') {
            valoresTotal.saida += transacao.valor;
        }
        return valoresTotal;
    }, {entrada: 0, saida: 0})
}

function buscarOperacao(transacoes, operacao) {
    const valoresTotal = calcularTransacoes(transacoes);
    return { [operacao]: valoresTotal[operacao] }; //Retorna um objeto somente com a operação desejada
}

const resultadoTransacoes = calcularTransacoes(transacoesFinanceiras);
const saidaEntrada = buscarOperacao(transacoesFinanceiras, 'saida');
console.log(resultadoTransacoes);
console.log(saidaEntrada);