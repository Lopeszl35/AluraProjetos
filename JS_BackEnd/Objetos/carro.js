const carro = {
    marca: 'Fender',
    modelo: 'Stratocaster',
    ano: 2012,
    cor: 'Vermelho'
};

Object.defineProperty(carro, 'placa', {
    value: 'ABC-1234',
    enumerable: false
})

const chaves = Object.keys(carro);
console.log('Placa: ' + carro.placa);

for(let chave of chaves) {
    console.log(chave, carro[chave]);
}

//for(let prop in carro) {
    //console.log(prop, carro[prop]);
//}