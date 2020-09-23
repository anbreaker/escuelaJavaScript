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

module.exports = router;
