const cors = require('cors');

const corsWhitelist = [
  'http://localhost:8000',
  'https://www.codementor.io',
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
    console.log(JSON.stringify(res, null, 2));
    res.json({ msg: 'Test message, this request was succesful!' });
  });
};

module.exports = appRouter;
