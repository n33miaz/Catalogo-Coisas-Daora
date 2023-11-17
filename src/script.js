document.addEventListener("DOMContentLoaded", function () {
    const listaFilmes = [
        {
            nome: "Interstellar",
            link:"https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg"
        },
        {
            nome: "The Social Network",
            link: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            nome: "Oppenheimer",
            link: "https://posterspy.com/wp-content/uploads/2023/07/oppenheimer-posterspy.jpg"
        },
        {
            nome: "The Imitation Game",
            link: "https://i.pinimg.com/originals/90/8e/07/908e07944ac6b997180a8190600b3df7.jpg"
        },
        {
            nome: "10 Things I...",
            link: "https://m.media-amazon.com/images/I/71dgB-Pj61S.jpg"
        }
    ];

    const listaMusicas = [
        {
            nome: "A Arte do Insulto",
            link: "https://akamai.sscdn.co/uploadfile/letras/albuns/7/3/8/3/22153.jpg"
        },
        {
            nome: "Around the Fur",
            link: "https://m.media-amazon.com/images/I/81BbQMTakEL._UF1000,1000_QL80_.jpg"
        },
        {
            nome: "Far Beyond Driven",
            link: "https://upload.wikimedia.org/wikipedia/pt/a/a7/Farbeyonddriven.jpg"
        },
        {
            nome: "Follow the Leader",
            link: "https://www.jbhifi.com.au/cdn/shop/products/338460-Product-0-I_5cd7ba6d-a27d-4029-b18c-e18edef68147_1024x1024.jpg"
        },
        {
            nome: "Mezmerize",
            link: "https://m.media-amazon.com/images/I/71MT2hjHBvL._UF1000,1000_QL80_.jpg"
        }
    ];

    // expressão regular para verificar se o link termina com .jpg, .jpeg ou .png
    const verificacao = /\.(jpg|jpeg|png)$/;

    // função para exibir os filmes na tela
    function exibirFilmes() {
        const container = document.getElementById("filmes");

        // limpa o conteúdo atual do contaneir
        container.innerHTML = "";

        // loop para percorrer a lista de filmes
        for (let i = 0; i < listaFilmes.length; i++) {
            if (verificacao.test(listaFilmes[i].link)) {
                // criação de elementos HTML dinamicamente
                const filme = document.createElement("div");
                filme.classList.add("filme");

                const paragrafo = document.createElement("p");
                const imagem = document.createElement("img");

                // atribuição de valores aos elementos criados
                paragrafo.textContent = listaFilmes[i].nome;
                imagem.src = listaFilmes[i].link;

                // adiciona os elementos ao DOM
                filme.appendChild(paragrafo);
                filme.appendChild(imagem);
                container.appendChild(filme);
            } else {
                console.log(`o link da posição ${i} não termina em .(jpg|jpeg|png)`);
            }
        }
    }

    // função para exibir as músicas na tela
    function exibirMusicas() {
        const container = document.getElementById("musicas");

        // limpa o conteúdo atual do contaneir
        container.innerHTML = "";

        // loop para percorrer a lista de musicas
        for (let i = 0; i < listaMusicas.length; i++) {
            if (verificacao.test(listaMusicas[i].link)) {
                // criação de elementos HTML dinamicamente
                const musica = document.createElement("div");
                musica.classList.add("musica");

                const paragrafo = document.createElement("p");
                const imagem = document.createElement("img");

                // atribuição de valores aos elementos criados
                paragrafo.textContent = listaMusicas[i].nome;
                imagem.src = listaMusicas[i].link;

                // adiciona os elementos ao DOM
                musica.appendChild(paragrafo);
                musica.appendChild(imagem);
                container.appendChild(musica);
            } else {
                console.log(`o link da posição ${i} não termina em .(jpg|jpeg|png)`);
            }
        }
    }

    // variáveis globais para os elementos DOM
    let filmesContainer, musicasContainer, tituloFilmes, tituloMusicas;

    // função para obter os elementos DOM
    function obterElementos() {
        filmesContainer = document.getElementById("filmes");
        musicasContainer = document.getElementById("musicas");
        tituloFilmes = document.getElementById("titulo-filmes");
        tituloMusicas = document.getElementById("titulo-musicas");
    }

    // função para trocar a coleção entre filmes e músicas
    function trocarColecao() {
        obterElementos();

        if (filmesContainer && musicasContainer && tituloFilmes && tituloMusicas) {
            if (filmesContainer.style.display !== "none") {
                // oculta elementos de filmes e exibe elementos de músicas
                ocultarElementos(filmesContainer, tituloFilmes);
                exibirElementos(musicasContainer, tituloMusicas);
                exibirMusicas();
            } else {
                // oculta elementos de filmes e exibe elementos de filmes
                exibirElementos(filmesContainer, tituloFilmes);
                ocultarElementos(musicasContainer, tituloMusicas);
                exibirFilmes();
            }
        }
    }

    // função para ocultar elementos
    function ocultarElementos(container, titulo) {
        if (container && titulo) {
            container.style.display = "none";
            titulo.style.display = "none";
        }
    }

    // função para exibir elementos
    function exibirElementos(container, titulo) {
        if (container && titulo) {
            container.style.display = "flex";
            titulo.style.display = "block";
        }
    }

    // evento de clique no botão para trocar a coleção
    const btnTrocarColecao = document.getElementById("btnTrocarColecao");

    btnTrocarColecao.addEventListener("click", function () {
        trocarColecao();
    });

    // inicializa a obtenção dos elementos DOM e exibe os filmes ao carregar a página
    obterElementos();
    exibirFilmes();
});
