export const chartService = {
    btcDailyOptions,
}

function btcDailyOptions() {
    return {
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
}