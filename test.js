const binance = require('binance-api-node').default
const pair = 'ADAUSDT'

const binance_client = binance()

async function run() {
    const result = await binance_client.candles({ symbol: pair, interval: '1m' })
    console.log('result:', result.length)
}

run()
