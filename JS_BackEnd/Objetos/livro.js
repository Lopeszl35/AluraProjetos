// Definição do construtor do livro
function Livro(titulo, autor, anoPublicacao, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.genero = genero;
}

// Definição do método toString para representar o livro como uma string
Livro.prototype.toString = function() {
    return `${this.titulo} - ${this.autor} (${this.anoPublicacao}), Gênero: ${this.genero}`;
};

// Instanciação do objeto livro com valores específicos
const livro = new Livro(
    "Harry Potter e a Pedra Filosofal",
    "J.K. Rowling",
    1997,
    "Fantasia"
);

// Impressão dos detalhes do livro no console usando o método toString
console.log(livro.toString());
