const rp = require('request-promise');
const { COIN_MARKET_CAP_API_KEY } = require('../secrets');

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    start: '1',
    limit: '50',
    convert: 'USD',
  },
  headers: {
    'X-CMC_PRO_API_KEY': COIN_MARKET_CAP_API_KEY,
  },
  json: true,
  gzip: true,
};

module.exports = {
  getCMCData: cb => {
    rp(requestOptions)
      .then(response => {
        console.log('Response succeeded.');
        if (typeof cb === 'function') {
          cb(response);
        }
      })
      .catch(err => {
        console.log('Something went wrong:', err.error.status.error_message);
        cb(err);
      });
  },
};
