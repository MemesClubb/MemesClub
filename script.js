// Função para carregar os memes na página principal (index.html)
function carregarMemes() {
    let memes = localStorage.getItem('memes');
    memes = memes ? JSON.parse(memes) : [];

    const memesContainer = document.getElementById('memes-list');
    memesContainer.innerHTML = ''; // Limpa qualquer conteúdo anterior

    memes.reverse(); // Reverte a ordem dos memes para exibir o mais recente primeiro

    memes.forEach((meme) => {
        const memeContainer = document.createElement('div');
        memeContainer.classList.add('meme');

        const memeImg = document.createElement('img');
        memeImg.src = meme.url;

        const memeTitle = document.createElement('p');
        memeTitle.textContent = meme.titulo;

        const memeDesc = document.createElement('p');
        memeDesc.textContent = meme.descricao;

        memeContainer.appendChild(memeImg);
        memeContainer.appendChild(memeTitle);
        memeContainer.appendChild(memeDesc);

        memesContainer.appendChild(memeContainer);
    });
}

// Carregar os memes quando a página for carregada
window.onload = function () {
    carregarMemes();
};
