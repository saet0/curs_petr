'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
            count: numberOfFilms,
            movies: {},
            actors: {},
            genres: [],
            privat: false
        };
  
    
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