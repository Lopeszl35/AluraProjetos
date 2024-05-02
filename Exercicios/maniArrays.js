const assentosCinema = [
    {
        id: 1,
        disponibilidade: true,
    },
    {
        id: 2,
        disponibilidade: true,
    },
    {
        id: 3,
        disponibilidade: false,
    },
    {
        id: 4,
        disponibilidade: true,
    },
    {
        id: 5,
        disponibilidade: false,
    },
    {
        id: 6,
        disponibilidade: true,
    },
    {
        id: 7,
        disponibilidade: false,
    }
]

function reservarAssento(id) {
    const assento = assentosCinema.find(assento => assento.id === id);
    if (assento) {
        if (assento.disponibilidade) {
            assento.disponibilidade = false;
            return `Assento ${id} reservado com sucesso!`;
        } else {
            return `Assento ${id} indisponível`;
        }
    } else {
        return `Assento ${id} não encontrado`;
    }
}

function cancelarReserva(id) {
    const assento = assentosCinema.find(assento => assento.id === id);
    if (assento) {
        if (!assento.disponibilidade) {
            assento.disponibilidade = true;
            return `Reserva do assento ${id} cancelada com sucesso!`;
        } else {
            return `Assento ${id} já está disponível`;
        }
    } else {
        return `Assento ${id} não encontrado`;
    }
}

console.log(reservarAssento(6));
console.log(cancelarReserva(7));
