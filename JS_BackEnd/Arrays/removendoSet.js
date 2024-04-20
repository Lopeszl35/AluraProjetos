const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// const nomesUnicos = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];

console.log(listaNomesAtualizados);