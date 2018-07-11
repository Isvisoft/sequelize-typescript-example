import {Router} from 'express';
import {MovieActor} from '../models/MovieActor';
import { Genre } from '../models/Genre';

export const genre = Router();

genre.post('/', async (req, res, next) => {
  try {
    const actor = await Genre.create(req.body);
    res.status(201).json(actor);
  } catch (e) {
    next(e);
  }
});

genre.post('/:id/movies/:movieId', async (req, res, next) => {
  try {
    await MovieActor.create({
      actorId: req.params['id'], movieId: req.params['movieId']
    });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

genre.get('', async (req, res, next) => {
  try {
    res.json(await Genre.scope(req.query['scope']).findAll());
  } catch (e) {
    next(e);
  }
});

genre.get('/:id', async (req, res, next) => {
  try {
    const actor = await Genre.scope(req.query['scope']).findById(req.params['id']);
    res.json(actor);
  } catch (e) {
    next(e);
  }
});

genre.put('/:id', async (req, res, next) => {
  try {
    await Genre.update(req.body, {where: {id: req.params['id']}});
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
