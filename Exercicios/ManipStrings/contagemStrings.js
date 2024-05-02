const texto = 'Oi tudo tudo bem Naomi? Como vai?';

function contarPalavras(texto) {
    const palavras = texto.split(' ');
    const palavrasContadas = palavras.reduce((acumulador, palavra) => {
        if(acumulador.hasOwnProperty(palavra)) {
            acumulador[palavra]++;
        } else {
            acumulador[palavra] = 1;
        }
        return acumulador;
    }, {});
    return palavrasContadas;
}

const palavras = contarPalavras(texto);
console.log(palavras);