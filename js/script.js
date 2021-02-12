const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: () => {

    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt("На сколько оцените его?");
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
      } else {
        i--;
        console.log('Error');
      }
    }
  },
  detectPersonalLevel: () => {

    if (personalMovieDB.count < 10) {
      console.log('Просмотрено двольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произогла ошибка');
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      const genres = prompt(`Введи ваши любимые жанры через запятую`).toLowerCase();
      if (genres === '' || genres == null) {
        console.log(`Вы ввели некорректные жанные или не ввели их вовсе`);
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat) {} else {
      personalMovieDB.privat = true;
    }
  }
};