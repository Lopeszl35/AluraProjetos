const listaEstudantes = ["Rafael", "Maria", "Joaquim", "Ana"];

//Remover elemento do array com splice
listaEstudantes.splice(1, 2);

//Adicionar elemento no array com splice
listaEstudantes.splice(2, 0, "Joaquim");

console.log(listaEstudantes);