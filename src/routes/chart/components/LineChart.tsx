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
import { chartStore } from '../../../zustand/chartStore';
 
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



const LinesChart = (): JSX.Element => {

    const chart = chartStore(item => item.files);


    var midata = {
        labels: chart.map(a => a.number),
        datasets: [
            {
                label: 'Beneficios',
                data: chart.map(e => e.capital),
                tension: 0.1,
                borderColor: '#00a2ff',
                pointRadius: 5,
            },
        ],
    };


    return (
        <div className='w-[100%] h-[270px] flex justify-center chart'>
            <Line data={midata} options={misoptions} />
        </div>
    )
}

export default LinesChart;