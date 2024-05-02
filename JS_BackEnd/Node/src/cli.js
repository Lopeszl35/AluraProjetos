import pegaArquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {
    if (valida) {
        console.log(
        chalk.yellow('Lista validada'),
        chalk.black.bgRed(identificador), 
        await listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow('Lista de Links'),
            chalk.black.bgGreen(identificador), 
            resultado);
    }

}

async function processaTexto(argumentos) {
    try {
        const caminho = argumentos[2];
        const valida = argumentos[3] === '--valida';
        const stats = fs.lstatSync(caminho);

        if (stats.isFile()) {
            const resultado = await pegaArquivo(argumentos[2]);
            imprimeLista(valida, resultado);
        } else if (stats.isDirectory()) {
            const arquivos = await fs.promises.readdir(caminho);
            for (const nomeDeArquivo of arquivos) {
                const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
                console.log(`${caminho}/${nomeDeArquivo}`);
                imprimeLista(valida, lista, nomeDeArquivo);
            }
        }
    } catch (erro) {
        console.error(chalk.red(erro.code, 'Não há arquivo ou diretório no caminho especificado'));
    }
}

processaTexto(caminho);
