const notas = [10, 6, 8, 5.5, 10];
let media = 0;
notas.pop();

for(let i = 0; i < notas.length; i++) {
    media += notas[i];
}

media = media /notas.length;
console.log(media.toFixed(2));

