import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { chartStore } from '../../../../zustand/chartStore';
import './chart.css';
 
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var misoptions = {
    scales: {
        x: {
            ticks: { color: 'orange' }
        }
    },
    mantainAspectRatio: false
};



const LineChart = (): JSX.Element => {

    const chart = chartStore(item => item.files);


    var midata = {
        labels: chart.map(a => a.number),
        datasets: [
            {
                label: 'Capital',
                data: chart.map(e => e.capital),
                tension: 0.1,
                borderColor: '#2563eb',
                pointRadius: 5
            },
        ],
    };


    return (
        <div id='chart' className='w-[100%] flex justify-center chart bg-[#061333]'>
            <Line data={midata} options={misoptions} />
        </div>
    )
}

export default LineChart;