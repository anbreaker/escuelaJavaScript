'use strict';
const {Router} = require('express');
const MoviesService = require('../services/servicesMovies');
const router = Router();

const moviesService = new MoviesService();

router.get('/', async (req, res, next) => {
  const {tags} = req.query;
  try {
    const movies = await moviesService.getMovies({tags});
    res.status(200).json({
      data: movies,
      message: 'movies listed',
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:movieId', async (req, res, next) => {
  const {movieId} = req.params;
  try {
    const movies = await moviesService.getMovie({movieId});

    res.status(200).json({
      data: movies,
      message: 'Movie retrieved',
    });
  } catch (error) {
    next(error);
  }
});

// Created Movies
router.post('/:movieId', async (req, res, next) => {
  const {body: movie} = req;
  try {
    const createdMovieId = await moviesService.createMovie({movie});

    res.status(201).json({
      data: createdMovieId,
      message: 'Movie Created',
    });
  } catch (error) {
    next(error);
  }
});

// Update Movie
router.put('/:movieId', async (req, res, next) => {
  const {movieId} = req.params;
  const {body: movie} = req;

  try {
    const updatedMovieId = await moviesService.updateMovie({
      movieId,
      movie,
    });
    res.status(200).json({
      data: updatedMovieId,
      message: 'Movie updated',
    });
  } catch (error) {
    next(error);
  }
});

// Deleted Movie
router.put('/:movieId', async (req, res, next) => {
  const {movieId} = req.params;

  try {
    const deletedMovieId = await moviesService.deleteMovie({movieId});

    res.status(200).json({
      data: deletedMovieId,
      message: 'Movie deleted',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
