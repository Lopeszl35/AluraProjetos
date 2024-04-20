const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

const novasFrutas = frutas.splice(2, 2, 'Kiwi', 'Pessego');
console.log(frutas);
console.log(novasFrutas);//Joga os indices removidos no novo array