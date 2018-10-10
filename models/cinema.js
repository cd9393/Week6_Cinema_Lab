const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.findByTitle = function (title) {
return   this.films.filter(film => film.title === title);
};

Cinema.prototype.findByGenre = function (genre) {
return   this.films.filter(film => film.genre === genre);
};

Cinema.prototype.findByYear = function (year) {
return   this.films.filter(film => film.year === year);
};

Cinema.prototype.checkByYear = function (year) {
if(this.findByYear(year).length > 0){
  return true
}else{
  return false
}
};

Cinema.prototype.meetMinimumLength = function (length) {
  return this.films.every(film => film.length > length)
}

Cinema.prototype.totalRunTime = function () {
  return this.films.reduce((total,film) => {
    return total + film.length;
  },0);
};

Cinema.prototype.filmsByProperty = function (property,value) {
return   this.films.filter(film => film[property] === value)
};

module.exports = Cinema;
