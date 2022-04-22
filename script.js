const numberOfFilmms = prompt('skolko filmov yzhe posmotreli?', '');

const personalMovieDB = {
    count: numberOfFilmms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt('odin iz poslednih prosmotrennyh filmov?', ''),
      b = prompt('na skolko ocenite ego?', ''),
      c = prompt('odin iz poslednih prosmotrennyh filmov?', ''),
      d = prompt('na skolko ocenite ego?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



