let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let a = prompt('Один из последних просмотренных фильмов?','');
let b = prompt('На сколько оцените его?','')
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[a] = b;
