export const getStock = () =>
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&outputsize=full&apikey=L0L4DTNSJZGG2DUV')
        .then(res => res.json())