"use strict"
//Задание 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//Задание 2
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
//Задагие 3
const a = prompt('Один из просмотренных последних фильмов?',''),
      b = prompt('На сколько оцените его ?', ''),
      c =  prompt('Один из просмотренных последних фильмов?',''),
      d = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)