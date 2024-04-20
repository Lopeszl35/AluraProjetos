const contaBancaria = {
    titular: 'Rafael',
    saldo: 0,
    depositar: function (valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        this.saldo -= valor;
    },
    mostrarSaldo: function (cliente) {
        console.log(`Ola ${this.titular}, seu saldo é ${this.saldo}`);
    }
}

const cliente = {
    contaBancaria: contaBancaria,
    nome: 'Rafael'
};

contaBancaria.depositar(500);
contaBancaria.sacar(100);
contaBancaria.mostrarSaldo(cliente);