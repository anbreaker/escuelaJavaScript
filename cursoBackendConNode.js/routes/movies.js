'use strict';
const {Router} = require('express');
const router = Router();

const {moviesMock} = require('../utils/mocks/dataMovies');

router.get('/', async (req, res, next) => {
  try {
    const movies = await Promise.resolve(moviesMock);
    res.status(200).json({
      data: movies,
      message: 'movies listed',
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:movieId', async (req, res, next) => {
  try {
    const movies = await Promise.resolve(moviesMock[0]);

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
  try {
    const createdMovieId = await Promise.resolve(moviesMock[0].id);

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
  try {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);

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
  try {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);

    res.status(200).json({
      data: deletedMovieId,
      message: 'Movie deleted',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
