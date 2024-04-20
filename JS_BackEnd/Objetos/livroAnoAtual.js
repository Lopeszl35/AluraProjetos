const livro = {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    anoPublicacao: 1997,
    genero:"Fantasia"
};

let anoAtual = new Date().getFullYear();
livro.idadeDePublicacao = anoAtual - livro.anoPublicacao;

function imprimirDetalhes(obj) {
    console.log(`Autor: ${obj.autor}, Ano de publicação: ${obj.anoPublicacao}, Idade de publicação: ${obj.idadeDePublicacao}, Genero: ${obj.genero}`);
}

imprimirDetalhes(livro);