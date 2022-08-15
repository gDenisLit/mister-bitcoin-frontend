import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
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

export class StatisticPage extends Component {

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

        const options = {
            responsive: true,
            elements: {
                point: { radius: 0 }
            },
            plugins: {
                legend: { display: false },
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10
                    }
                },
                y: {
                    ticks: { stepSize: 5000 },
                },
            },
        }

        return (
            <section className='statistic main-layout full'>
                <div className='statistic__inner'>
                    <h1>StatisticPage</h1>
                    <div className='chart-container'>
                        <Line options={options} data={data} />
                    </div>
                </div>
            </section>
        )
    }
}
