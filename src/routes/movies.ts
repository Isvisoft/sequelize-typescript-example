import {Router} from 'express';
import {Movie} from '../models/Movie';

export const movies = Router();

/**
 * This function comment is parsed by doctrine
 * @route POST /movies
 * @group foo - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
movies.post('/', async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (e) {
    next(e);
  }
});

/**
 * This function comment is parsed by doctrine
 * @route GET /movies
 * @group foo - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
movies.get('', async (req, res, next) => {

  try {

    res.status(200).json(await Movie.scope(req.query['scope']).findAll());
  } catch (e) {
    next(e);
  }
});

/**
 * This function comment is parsed by doctrine
 * @route GET /movies/:id
 * @group foo - Operations about user
 * @param {string} id.query.required - username or email
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
movies.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.scope(req.query['scope']).findById(req.params['id']);
    res.json(movie);
  } catch (e) {
    next(e);
  }
});

movies.put('/:id', async (req, res, next) => {
  try {
    await Movie.update<Movie>(req.body, {where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
