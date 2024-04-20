// Operações matemáticas
let operacoesMat = (num1, num2, operacao) => {
    switch (operacao) {
        case 'adicao':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Erro: divisão por zero";
            }
        default:
            return "Operação inválida";
    }
};

// Exemplos de uso:
console.log(operacoesMat(5, 3, 'adicao')); // Saída: 8
console.log(operacoesMat(5, 3, 'subtracao')); // Saída: 2
console.log(operacoesMat(5, 3, 'multiplicacao')); // Saída: 15
console.log(operacoesMat(5, 3, 'divisao')); // Saída: 1.6666666666666667
console.log(operacoesMat(5, 0, 'divisao')); // Saída: Erro: divisão por zero
console.log(operacoesMat(5, 3, 'potenciacao')); // Saída: Operação inválida

//Verificando se é Palindromo
let palindromo = (palavra1) => {
    const palavra2 = [];
    ordem = palavra1.length;

    for(let i = 0; i < palavra1.length; i++){
        palavra2[i] = palavra1[ordem-1];
        ordem--; 
    }

    const str1 = palavra1;
    const str2 = palavra2.join('');

    if(str1 === str2) {
        return true;
    } else {
        return false;
    }
}

let verificandoPalindromo = (palavra) => {
    let resultado = palindromo(palavra);

    if(resultado === true) {
        console.log(`A palavra ${palavra} é um palindromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palindromo`);
    }
}

verificandoPalindromo("ana");


//Fatorial de um número

let calcularFatorial = (num) => {
    let calcularFatorial = (num) => {
        let resultado = 1; // Inicializar o resultado como 1, não como 0
    
        for(let i = num; i >= 1; i--) {
            resultado *= i; // Multiplicar o resultado pelo número atual (i)
        }
        return resultado;
    }
}

let numFatorial = calcularFatorial(5);
console.log(numFatorial);