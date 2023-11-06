let peliculas = [];
const container = document.getElementById('container');
let image = "https://yt3.googleusercontent.com/fli98_BcJUHIZ2P545uEIXx7l6DvowQhU_FwY07wjdc51zgHfilR7VZ_nJ7QKXhDMoCDxtTS=s900-c-k-c0x00ffffff-no-rj";

function mostrarPeliculas(pelis) {

    for (let i = 0; i < pelis.length; i++) {
        const pelicula = pelis[i];
        const child = document.createElement('div');
        let peliculaYear = 'Pelicula nueva';
        if (pelicula.year < 2000) {
            peliculaYear = 'Pelicula vieja';
        }
        const poster = pelicula.poster ? pelicula.poster : image;
        child.innerHTML = `
            <div class="pelicula col s3 blue-grey lighten-5">
                <div class="card">
                <div class="card-image">
                    <img
                    onerror="getImageError(this)"
                    src="${poster}">
                    <span class="card-title">${pelicula.title}</span>
                </div>
                <div class="card-content">
                    <p class="plot">
                    ${pelicula.plot}
                    </p>
                    <br>
                    <p>Year: ${pelicula.year}</p>
                    <p>${peliculaYear}</p>
                </div>
                <div class="card-action">
                    <a href="info-pelis.html?movieId=${pelicula._id}">More information</a>
                </div>
                </div>
            </div>
        `;
        container.appendChild(child)
    }
}

window.addEventListener("load", function (event) {
    fetch('https://62p2jh-3000.csb.app/movies?pageSize=20&page=1')
        .then(response => response.json())
        .then(data => {
            peliculas = data.movies;
            mostrarPeliculas(data.movies);
        });
});


function searchMovie() {
    const buscador = document.getElementById("buscador").value.toLowerCase();
    console.log(buscador);
    const resultados = peliculas.filter(function (pelicula) {
        return pelicula.title.toLowerCase().includes(buscador);

    });
    console.log(resultados);
    container.innerHTML = '';
    mostrarPeliculas(resultados);

}

function limpiar() {
    buscador.value = "";
    mostrarPeliculas(peliculas);
}

function getImageError(elemento) {
    console.log('Error en la imagen', elemento);
    elemento.src = image;
}

