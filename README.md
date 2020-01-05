# Coin Tracker API
A simple API to fetch current cryptocurrency market data.
Powered by [CoinMarketCap](https://coinmarketcap.com/).

## Setup
- Clone the repo
- `cd coin-tracker-api`
- `npm install`
- `npm run dev`

### Note
The API server currently runs locally, so on the frontend you'd fetch from `http://localhost:3500`.

## API
- `/`: get the top 50 cryptocurrencies listed on CoinMarketCap sorted by market capitalization.
