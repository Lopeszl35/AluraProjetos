import fs from 'fs';
import chalk from 'chalk';

function trataError(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));// Utilizando a função map para retornar um array de objetos com as capturas dos links
    return resultados.length !== 0 ? resultados : 'Não há links';
}

//async/await
async function pegaArquivo(caminhoDoArquivo) {
    try{
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding);
        return extraiLinks(texto);
    } catch(erro) {
        trataError(erro);
    }
}

export default pegaArquivo;