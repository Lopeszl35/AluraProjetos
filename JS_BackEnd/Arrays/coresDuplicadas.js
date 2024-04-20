const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

function coresDuplicadas(...cores) {
    conjuntoCores = new Set([].concat(...cores));
    return [...conjuntoCores];
}

console.log(coresDuplicadas(coresLista1, coresLista2));