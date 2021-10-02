let numberOfFilms
let a 
let b 
do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    console.log(numberOfFilms)
    a = prompt('Один из последних просмотренных фильмов?','');
    console.log(a)
    b = prompt('На сколько оцените его?') 
    console.log(b)
}
while (numberOfFilms && a && b == false, a.length > 50);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[a] = b;

if (personalMovieDB.count <= 0) {
    console.log('Произошла ошибка')
} else if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов')
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
} else  {
    console.log('Вы киноман')
};