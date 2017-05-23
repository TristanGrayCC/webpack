//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var express = require('express');
filmRouter = new express.Router();

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
});

filmRouter.put('/:id', function(req, res){
  var updatedFilm = req.body.film;
  films[req.params.id] = updatedFilm;
  res.json(films);
});

filmRouter.post('/', function(req, res){
  var film = res.body.films;
  films.push(film);
  res.json(films);
});

filmRouter.get('/', function(req, res){
  res.json(films);
});

filmRouter.get('/:id', function(req, res){
  var film = films[req.params.id];
  res.json({film: film});
});

filmRouter.post('/:id/reviews', function(req, res){
  var film = films[req.params.id];
  var review1 = new Review({
    comment: req.body.comment,
    rating: req.body.rating,
    author: req.body.author
  });
  film.addReview(review1);
  res.json(data{films});
});

module.exports = filmRouter;
