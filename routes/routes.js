const cors = require('cors');
const { getCMCData } = require('../requests/requests');

const corsWhitelist = ['http://localhost:8000', 'http://localhost:3000'];
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
    getCMCData(cmcData => {
      res.json({ cmcData });
    });
  });
};

module.exports = appRouter;
