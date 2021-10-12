'use strict';

const personalMovieDB = {
            count: 0,
            movies: {},
            actors: {},
            genres: [],
            privat: true,
            start: function() {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function  () {
        if (personalMovieDB.count <= 0) {
           console.log('Произошла ошибка')
       } else if (personalMovieDB.count <= 10) {
           console.log('Просмотрено мало фильмов')
       } else if (personalMovieDB.count <= 30) {
           console.log('Вы классический зритель')
       } else  {
           console.log('Вы киноман')
       };      
   },
   showMyDB: function () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++){
            let a = personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            if (a != null && a.length < 50 && a != '') {
                personalMovieDB.genres[i-1] = a; 
            console.log('done')
            } else {
                console.log('error')
                i--;
            }
        
        }
    },
    toggleVisibleMyDB: function  () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    }
};        