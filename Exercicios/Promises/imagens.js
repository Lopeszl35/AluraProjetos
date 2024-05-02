async function carregarImagens(urls) {
    try {
        // Array para armazenar as promessas de carregamento de cada imagem
        const promises = [];

        // Itera sobre as URLs de imagens
        urls.forEach(url => {
            // Cria uma promessa para cada imagem
            const promise = new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img); // Resolva a promessa quando a imagem for carregada com sucesso
                img.onerror = () => reject(new Error(`Erro ao carregar imagem: ${url}`)); // Rejeite a promessa em caso de erro de carregamento
                img.src = url; // Define a URL da imagem
            });

            // Adiciona a promessa ao array de promessas
            promises.push(promise);
        });

        // Aguarda o carregamento de todas as imagens usando Promise.all
        const imagens = await Promise.all(promises);

        // Exibe as imagens na página
        imagens.forEach(img => document.body.appendChild(img));
    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
    }
}

// Exemplo de uso
const urls = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250'
];

carregarImagens(urls);
