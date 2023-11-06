
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('movieId');
const plot = document.getElementById("plot");
const generous = document.getElementById("generous");
const rated = document.getElementById("rated");
const cast = document.getElementById("cast");
const poster = document.getElementById("poster");
const title = document.getElementById("title");
const fullplot = document.getElementById("fullplot");
const countries = document.getElementById("countries");
const released = document.getElementById("released");
const directors = document.getElementById("directors");
const writers = document.getElementById("writers");
const year = document.getElementById("year");
const type = document.getElementById("type");
const wins = document.getElementById("wins");
const nominations = document.getElementById("nominations");

function getMovieInfo() {
    fetch(`https://62p2jh-3000.csb.app/movies/${myParam}`)
        .then(response => response.json())
        .then(data => {
            showMovieInfo(data);
        });
}

getMovieInfo();

function showMovieInfo(data) {
    plot.value = data.plot;
    generous.value = data.genres;
    rated.value = data.rated;
    cast.value = data.cast;
    poster.value = data.poster;
    title.value = data.title;
    fullplot.value = data.fullplot;
    countries.value = data.countries;
    released.value = data.released;
    directors.value = data.directors;
    writers.value = data.writers;
    year.value = data.year;
    type.value = data.type;
}


function update() {
    plot.classList.remove('invalid');
    generous.classList.remove('invalid');
    rated.classList.remove('invalid');
    cast.classList.remove('invalid');
    poster.classList.remove('invalid');
    title.classList.remove('invalid');
    fullplot.classList.remove('invalid');
    countries.classList.remove('invalid');
    released.classList.remove('invalid');
    directors.classList.remove('invalid');
    writers.classList.remove('invalid');
    year.classList.remove('invalid');
    type.classList.remove('invalid');
    const updatedMovie = {
        plot: plot.value,
        genres: generous.value.split(','),
        rated: rated.value,
        cast: cast.value.split(','),
        poster: poster.value,
        title: title.value,
        fullplot: fullplot.value,
        countries: countries.value.split(','),
        released: released.value,
        directors: directors.value.split(','),
        writers: writers.value.split(','),
        awards: {
            wins: wins.value,
            nominations: nominations.value,
            text: `${wins.value} wins.`
        },
        year: parseInt(year.value),
        type: type.value
    }

    console.log(updatedMovie)
    fetch(`https://62p2jh-3000.csb.app/movies/${myParam}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedMovie)
    }).then(function(response) {
        console.info('Todo salio bien')
    }).catch(function(error) {
        console.error(error)
    })
}
 function deleteMovie() {

fetch(`https://62p2jh-3000.csb.app/movies/${myParam}`, {
    method: 'DELETE',
  })
  .then(res => res.json()) // or res.json()
  .then(res => {
    console.log(res)
    const inicio = document.getElementById("inicio2");
    inicio.click();
 })
 }


   
 

function updateMovie() {
    if (plot.value == "" || generous.value == "" || rated.value == "" || cast.value == "" || poster.value == "" || title.value == "" || fullplot.value == "" ||
        countries.value == "" || released.value == "" || directors.value == "" || writers.value == "" || year.value == "" || type.value == "") {
        alert("CAMPOS VACIOS, PORFAVOR INGRESE DATOS.");

        if (plot.value == "") {
            alert("Plot vacio, porfavor ingrese datos.");
            plot.classList.toggle('invalid');
            return;
        }
        if (generous.value == "") {
            alert("Generous vacio, porfavor ingrese datos.");
            generous.classList.toggle('invalid');
            return;
        }
        if (rated.value == "") {
            alert("Rated vacio, porfavor ingrese datos.");
            rated.classList.toggle('invalid');
            return;
        }
        if (cast.value == "") {
            alert("Cast vacio, porfavor ingrese datos.");
            cast.classList.toggle('invalid');
            return;
        }
        if (poster.value == "") {
            alert("Poster vacio, porfavor ingrese datos.");
            poster.classList.toggle('invalid');
            return;
        }
        if (title.value == "") {
            alert("Title vacio, porfavor ingrese datos.");
            title.classList.toggle('invalid');
            return;
        }
        if (fullplot.value == "") {
            alert("Fullplot vacio, porfavor ingrese datos.");
            fullplot.classList.toggle('invalid');
            return;
        }
        if (countries.value == "") {
            alert("Countries vacio, porfavor ingrese datos.");
            countries.classList.toggle('invalid');
            return;
        }
        if (released.value == "") {
            alert("Released vacio, porfavor ingrese datos.");
            released.classList.toggle('invalid');
            return;
        }
        if (directors.value == "") {
            alert("Directors vacio, porfavor ingrese datos.");
            directors.classList.toggle('invalid');
            return;
        }
        if (writers.value == "") {
            alert("Writers vacio, porfavor ingrese datos.");
            writers.classList.toggle('invalid');
            return;
        }
        if (year.value == "") {
            alert("Year vacio, porfavor ingrese datos.");
            year.classList.toggle('invalid');
            return;
        }
        if (type.value == "") {
            alert("Type vacio, porfavor ingrese datos.");
            type.classList.toggle('invalid');
            return;
        }
    }

    update();
}