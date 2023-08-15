document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        const searchTerm = e.target.value.toLowerCase();
        if (e.key === "Escape") e.target.value = ""
        document.querySelectorAll('.pelicula').forEach(pelicula => {
            const titulo = pelicula.querySelector('.titulo3').textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                pelicula.classList.remove("filtro");

            } else {
                pelicula.classList.add("filtro");
            }
        });

    }

});



document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        const searchTerm = e.target.value.toLowerCase();
        if (e.key === "Escape") e.target.value = ""
        document.querySelectorAll('.tarjeta').forEach(pelicula => {
            const titulo = pelicula.querySelector('.titulo1').textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                pelicula.classList.remove("filtro");

            } else {
                pelicula.classList.add("filtro");
            }
        });

    }

});

document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        const searchTerm = e.target.value.toLowerCase();
        if (e.key === "Escape") e.target.value = ""
        document.querySelectorAll('.tarjeta').forEach(pelicula => {
            const titulo = pelicula.querySelector('.titulo2').textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                pelicula.classList.remove("filtro");

            } else {
                pelicula.classList.add("filtro");
            }
        });

    }

});



