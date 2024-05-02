async function consultarPrevisaoDoTempo(cidade) {
    const apiUrl = `https://api.hgbrasil.com/weather?woeid=${encodeURI(cidade)}&fields=only_results,temp,condition`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            const erro = await response.text();
            tratarErro(erro);
        }
        const data = await response.json();
        return infoClima(data);
    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
    }
}

function infoClima(clima) {
    const { city, temp, humidity, description, wind_speedy } = clima.results;
    return `Previsão do tempo para ${city},
    Temperatura: ${temp}°C, 
    Umididade: ${humidity}%, 
    Tempo: ${description}, 
    velocidade do vento: ${wind_speedy}`;
}

function tratarErro(erro) {
    throw new Error(`Erro ao consultar a API de previsão do tempo: ${erro}`);
}

// Exemplo de uso da função
consultarPrevisaoDoTempo('São Paulo')
    .then(console.log)
    .catch(console.error);
