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
import { motion } from 'framer-motion';
import ChartSvg from './utils/ChartSvg';
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

  const icon = {
    hidden: { opacity: 0, },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: 'easeInOut' }
    }
  }

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
    <div id='chart' className='w-[100%] flex justify-center items-center relative bg-[#061333]'>
      <Line data={midata} options={misoptions} />
      {chart.length < 2 &&
        <div className='absolute inset-y-0 bg-[#061333] inset-x-0 z-[12] flex flex-col rounded-b-lg '>

          <div className='h-[50%] w-full flex justify-center items-end'>
            <motion.h2 variants={icon} initial="hidden" animate="visible" className='z-10 2xl:text-[1vw] text-[#003db9] font-bold text-[1.5rem] lg:text-[2.5vw] mb-[10px]'>Record your first trade!</motion.h2>
          </div>

          <div className='h-[50%] w-full flex justify-center items-center'>
            <ChartSvg />
          </div>
          
        </div>}
    </div>
  )
}

export default LineChart;