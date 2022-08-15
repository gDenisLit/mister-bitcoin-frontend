import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoin.service'
import { chartService } from '../../services/chart.service'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export class BtcDaily extends Component {

    state = {
        btcData: null
    }

    componentDidMount() {
        this.loadBtcData()
    }

    loadBtcData = async () => {
        try {
            const btcData = await bitcoinService.getBtcData()
            this.setState({ btcData })
        } catch (err) { console.log('error loading btc data') }
    }

    render() {
        const data = this.state.btcData
        if (!data) return <div>Loading...</div>
        const options = chartService.btcDailyOptions()

        return (
            <div className='chart-container'>
                <Line options={options} data={data} />
            </div>
        )
    }
}
