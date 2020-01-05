const cors = require('cors');

const corsWhitelist = [
  'http://localhost:8000',
];
const corsConfig = {
  origin: (origin, callback) => {
    if (corsWhitelist.indexOf(origin) !== -1) {
      // this origin is allowed
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS!'));
    }
  },
};

const appRouter = app => {
  // applies to all routes
  app.use(cors(corsConfig));

  app.get('/', (req, res) => {
    res.status(200).send('Welcome to Coin Tracker API!');
  });
};

module.exports = appRouter;
