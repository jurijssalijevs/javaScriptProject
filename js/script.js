const numberOfFilms = +prompt('Skolko filmov prosmotrel', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  privat: false,
};

const a = prompt('Odin iz posle', '');
b = prompt('rate', '');
c = prompt('Odin iz posle', '');
d = prompt('rate', '');

console.log(personalMovieDB);

personalMovieDB.movies[a] = b;