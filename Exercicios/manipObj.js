const funcionarios = [
    {
        nome: 'João',
        cargo: 'Programador',
        salario: 2000
    },
    {
        nome: 'Maria',
        cargo: 'Programadora',
        salario: 2500
    },
];

function addFuncionario(nome, cargo, salario) {
    const novoFuncionario = { nome, cargo, salario };
    funcionarios.push(novoFuncionario);
}

function deletarFuncionario(nome) {
    const index = funcionarios.findIndex(funcionario => funcionario.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
        funcionarios.splice(index, 1);
    }
}

function modificarFuncionario(nome, novoCargo, novoSalario) {
    const index = funcionarios.findIndex(funcionario => funcionario.nome.toLowerCase() === nome.toLowerCase());
    if (index !== -1) {
        if(novoCargo !== '' && novoCargo !== undefined) {
            funcionarios[index].cargo = novoCargo;
        }
        if(novoSalario !== null && novoSalario !== undefined) {
            funcionarios[index].salario = novoSalario;
        }
    } else {
        console.log(`Funcionário: ${nome} não encontrado.`);
    }   
}

function folhaDePagamento () {
    const salarioTotal = funcionarios.reduce((salarioTotal, funcionario) => {
        return salarioTotal + funcionario.salario;
    }, 0);

    let maiorSalario = 0;
    let funcionarioComMaiorSalario = null;

    funcionarios.forEach(funcionario => {
        if(funcionario.salario > maiorSalario) {
            maiorSalario = funcionario.salario;
            funcionarioComMaiorSalario = funcionario;
        }
    });

    return `Salário total: ${salarioTotal} | Maior salário: ${funcionarioComMaiorSalario.nome}, Cargo: ${funcionarioComMaiorSalario.cargo}, Salário: ${maiorSalario}`;
}

addFuncionario('Carlos', 'Analista', 3000);
deletarFuncionario('joão');
modificarFuncionario('Maria', 'Desenvolvedora', 3200);

console.log(funcionarios);
console.log(folhaDePagamento());
