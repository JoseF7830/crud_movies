


function guardar(){
    const plot = document.getElementById("plot");
    const generous = document.getElementById("generous");
    const rated = document.getElementById("rated");
    const cast = document.getElementById("cast");
    const comments = document.getElementById("comments");
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const fullplot = document.getElementById("fullplot");
    const countries = document.getElementById("countries");
    const released = document.getElementById("released");
    const directors = document.getElementById("directors");
    const writers = document.getElementById("writers");
    const year = document.getElementById("year");
    const type = document.getElementById("type");


    function json(){
        plot.classList.remove('invalid');
        generous.classList.remove('invalid');
        rated.classList.remove('invalid');
        cast.classList.remove('invalid');
        comments.classList.remove('invalid');
        poster.classList.remove('invalid');
        title.classList.remove('invalid');
        fullplot.classList.remove('invalid');
        countries.classList.remove('invalid');
        released.classList.remove('invalid');
        directors.classList.remove('invalid');
        writers.classList.remove('invalid');
        year.classList.remove('invalid');
        type.classList.remove('invalid');
        const newMovie = {
            plot: plot.value,
            generous: generous.value.split(','),
            rated: rated.value,
            cast: cast.value.split(','),
            comments: comments.value,
            poster: poster.value,
            title: title.value,
            fullplot: fullplot.value.split(','),
            countries: countries.value,
            released: released.value,
            directors: directors.value.split(','),
            writers: writers.value,
            awards: {
                wins: wins.value,
                nominations: nominations.value,
                text: `${wins.value} wins.`
            },
            year: parseInt(year.value),
            type: type.value
        }
        // console.log(newMovie);

        fetch(`https://62p2jh-3000.csb.app/movies`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMovie)
        }).then(function(response) {
            console.info('Todo salio bien')
        }).catch(function(error) {
            console.error(error)
        })


    }



    if(plot.value == "" || generous.value == "" || rated.value == "" || cast.value == "" || poster.value == "" || title.value == "" || fullplot.value == "" || 
    countries.value == "" || released.value == "" || directors.value == "" || writers.value == "" || year.value == "" || type.value == ""){
        alert("CAMPOS VACIOS, PORFAVOR INGRESE DATOS.");

        if (plot.value == ""){
            alert("Plot vacio, porfavor ingrese datos.");
            plot.classList.toggle('invalid');
            return;
        }
        if(generous.value == ""){
            alert("Generous vacio, porfavor ingrese datos.");
            generous.classList.toggle('invalid');
            return;
        }
        if(rated.value == ""){
            alert("Rated vacio, porfavor ingrese datos.");
            rated.classList.toggle('invalid');
            return;
        }
        if(cast.value == ""){
            alert("Cast vacio, porfavor ingrese datos.");
            cast.classList.toggle('invalid');
            return;
        }
        if(poster.value == ""){
            alert("Poster vacio, porfavor ingrese datos.");
            poster.classList.toggle('invalid');
            return;
        }
        if(title.value == ""){
            alert("Title vacio, porfavor ingrese datos.");
            title.classList.toggle('invalid');
            return;
        }
        if(fullplot.value == ""){
            alert("Fullplot vacio, porfavor ingrese datos.");
            fullplot.classList.toggle('invalid');
            return;
        }
        if(countries.value == ""){
            alert("Countries vacio, porfavor ingrese datos.");
            countries.classList.toggle('invalid');
            return;
        }
        if(released.value == ""){
            alert("Released vacio, porfavor ingrese datos.");
            released.classList.toggle('invalid');
            return;
        }
        if(directors.value == ""){
            alert("Directors vacio, porfavor ingrese datos.");
            directors.classList.toggle('invalid');
            return;
        }
        if(writers.value == ""){
            alert("Writers vacio, porfavor ingrese datos.");
            writers.classList.toggle('invalid');
            return;
        }
        if(year.value == ""){
            alert("Year vacio, porfavor ingrese datos.");
            year.classList.toggle('invalid');
            return;
        }
        if(type.value == ""){
            alert("Type vacio, porfavor ingrese datos.");
            type.classList.toggle('invalid');
            return;
        }
    }
   
        
    json();
    plot.value = "";
    generous.value = "";
    rated.value = "";
    cast.value = "";
    comments.value = "";
    poster.value = "";
    title.value = "";
    fullplot.value = "";
    countries.value = "";
    released.value = "";
    directors.value = "";
    writers.value = "";
    year.value = "";
    type.value = "";
}


