import axios from 'axios'

export const bitcoinService = {
    getBtcData
}

const URL = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=700&interval=daily'
const BTC_KEY = 'btc_prices_db'

async function _fetchData() {
    var data = JSON.parse(localStorage.getItem(BTC_KEY))
    if (!data) {
        try {
            const res = await axios.get(URL)
            data = res.data
            localStorage.setItem(BTC_KEY, JSON.stringify(data))
        } catch (err) { console.log(err) }
    }
    return data
}

async function getBtcData() {
    const data = await _fetchData()
    const prices = data.prices.map(p => p[1])
    const labels = data.prices.map(p => {
        const date = new Date(p[0])
        return date.toLocaleDateString()
    })
    const datasets = [{
        label: 'Bitcoin daily prices',
        data: prices,
        borderColor: 'rgb(17, 16, 97)',
        fill: false,
        lineTension: 1,
    }]
    return { labels, datasets }
}
