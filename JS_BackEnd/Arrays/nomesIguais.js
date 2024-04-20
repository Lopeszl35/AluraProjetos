let nomes = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let quantidadeNomes = nomes.reduce((todosNomes, nome) => {
    if(nome in todosNomes) {
        todosNomes[nome]++;
    } else {
        todosNomes[nome] = 1;
    }
    return todosNomes;
}, {});

console.log(quantidadeNomes);