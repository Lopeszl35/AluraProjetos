const salaJS = [7.5, 8.9, 6.3, 9.2];
const salaJava = [6.0, 5.0, 8.0, 9.0];	
const salaPython = [7.0, 8.5, 8.9];

function calculaMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    return media = somaDasNotas / listaDeNotas.length;
} 

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));