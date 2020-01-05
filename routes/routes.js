const appRouter = app => {
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to Coin Tracker API!');
  });
};

module.exports = appRouter;
