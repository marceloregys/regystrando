const API_KEY = 'a180f13aca15a8920c914b4e417c4eaa';
window.location.href = "http://127.0.0.1:5500/?#"

function exibeFilmesPopulares () {
    let divFilme = document.getElementById('filmes');
    let texto = '';

    // Montar texto HTML das filmes
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.results.length; i++) {
        let filme = dados.results[i];
        let data = new Date (filme.release_date);

        texto = texto + `
            <div class="box-filme">
                <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="">
                <span class="titulo">${filme.original_title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()} </span><br>
                <span class="text">${filme.overview}<a href="https://www.themoviedb.org/movie/${filme.id}">Leia mais...</a>
                </span><br>
            </div>            
        `;
    };

    // Preencher a DIV com o texto HTML
    divFilme.innerHTML = texto;

}

function exibeSeriesPopulares () {
    let divSerie = document.getElementById('serie');
    let texto = '';

    // Montar texto HTML das filmes
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.results.length; i++) {
        let filme = dados.results[i];
        let data = new Date (filme.release_date);

        texto = texto + `
            <div class="box-filme">
                <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="">
                <span class="titulo">${filme.original_title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()} </span><br>
                <span class="text">${filme.overview}<a href="https://www.themoviedb.org/movie/${filme.id}">Leia mais...</a>
                </span><br>
            </div>            
        `;
    };

    // Preencher a DIV com o texto HTML
    divSerie.innerHTML = texto;

}

function exibeFilmes () {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das filmes
    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.results.length; i++) {
        let filme = dados.results[i];
        let data = new Date (filme.release_date);

        texto = texto + `
            <div class="box-filme">
                <img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="">
                <span class="titulo">${filme.original_title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()} </span><br>
                <span class="text">${filme.overview}<a href="https://www.themoviedb.org/movie/${filme.id}">Leia mais...</a>
                </span><br>
            </div>            
        `;
    };

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;

}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);

    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);

function executaFilmesPopulares () {

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmesPopulares;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`);

    xhr.send ();
}

function executaSeriesPopulares () {

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeSeriesPopulares;
    xhr.open ('GET', `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=1`);

    xhr.send ();
}

