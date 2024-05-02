const produtos = [
    {
        nome: 'Notebook',
        categoria: 'Computadores',
        preco: 2499,
    },
    {
        nome: 'iPad Pro',
        categoria: 'Tablets',
        preco: 4199,
    },
    {
        nome: 'Smartphone',
        categoria: 'Celulares',
        preco: 1899,
    }, 
    {
        nome: 'Macbook',
        categoria: 'Computadores',
        preco: 3499,
    },
    {
        nome: 'Cadeira',
        categoria: 'Moveis',
        preco: 1299,
    },
    {
        nome: 'Mesa',
        categoria: 'Moveis',
        preco: 899,
    }
]

function buscarProduto(arrProdutos, categoria) {
    arrProdutos = arrProdutos.filter((produto) => produto.categoria === categoria);
    const produtosOrdenados = arrProdutos.sort((a, b) => b.preco - a.preco);
    return produtosOrdenados;
}

console.log(buscarProduto(produtos, 'Moveis'));