import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'strong-error-handler';

import {movies} from './routes/movies';
import {actors} from './routes/actors';
import {genre} from './routes/genre';
import {appRoutes} from './routes/app';


 const app = express();
//  const expressSwagger = require('express-swagger-generator')(app);

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// middleware for json body parsing
app.use(bodyParser.json({limit: '5mb'}));

// enable corse for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

app.use('/movies', movies);
app.use('/actors', actors);
app.use('/genre', genre);
app.use('/', appRoutes);

// let options = {
//   swaggerDefinition: {
//       info: {
//           description: 'This is a sample server',
//           title: 'Swagger',
//           version: '1.0.0',
//       },
//       host: 'localhost:3000',
//       produces: [
//           "application/json",
//           "application/xml"
//       ],
//       // schemes: ['http', 'https'],
//   securityDefinitions: {
//           JWT: {
//               type: 'apiKey',
//               in: 'header',
//               name: 'Authorization',
//               description: "",
//           }
//       }
//   },
//   basedir: __dirname, //app absolute path
//   files: ['./routes/**/*.ts'] //Path to the API handle folder
// };

// expressSwagger(options)

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));

export default app
