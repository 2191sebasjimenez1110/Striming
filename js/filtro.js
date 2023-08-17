const genreButtons = document.querySelectorAll('.genre-button');
const movieList = document.getElementById('movie-list');

genreButtons.forEach(button => {
    button.addEventListener('click', filterMovies);
});

function filterMovies(event) {
    const selectedGenre = event.target.getAttribute('data-genre');

    // Show or hide movie items based on genre
    const movieItems = movieList.querySelectorAll('.tarjeta');
    movieItems.forEach(movie => {
        const movieGenre = movie.getAttribute('data-genre');
        if (selectedGenre === 'all' || selectedGenre === movieGenre) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
}

// Initial call to populate the movie list
filterMovies({ target: genreButtons[0] }); // Start with "All Genres" selected