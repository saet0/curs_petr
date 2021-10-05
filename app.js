'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start ();

const personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: true
        };

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
            
        let a = prompt('Один из последних просмотренных фильмов?',''),
            b = prompt('На сколько оцените его?','');
            
        if (a != null && b != null && a.length < 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b; 
        console.log('done')
        } else {
            console.log('error')
            i--;
        }
    }
}

rememberMyFilms();
    
function detectPersonalLevel () {
     if (personalMovieDB.count <= 0) {
        console.log('Произошла ошибка')
    } else if (personalMovieDB.count <= 10) {
        console.log('Просмотрено мало фильмов')
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы классический зритель')
    } else  {
        console.log('Вы киноман')
    };      
}

detectPersonalLevel ();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }
}

showMyDB ();

function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres ();