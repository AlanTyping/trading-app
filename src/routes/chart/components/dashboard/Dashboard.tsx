import { dashboardStore } from '../../../../zustand/dashboardState';
import { chartStore } from '../../../../zustand/chartStore';
import './dashboard.css';

export default function Dashboard() {

  const { dashboardState, changeDashboardState } = dashboardStore();

  const { files } = chartStore();

  const ganancias = files.filter(e => e.dolar > 0).length
  const perdidas = files.filter(e => e.dolar < 0).length
  const trades = files[files.length-1].number
  const pol: number = (files[files.length-1].capital - files[0].capital)

  const changeState = () => {
    changeDashboardState(dashboardState);
  }

  return (
    <div className={`w-[65%] flex flex-col rounded ${dashboardState ? "dashboardOn" : 'dashboardOff'} relative`} 
    id='dashboard'>
      <div className={`flex flex-row h-[50%] w-full ${dashboardState ? 'top-on' : 'top-off'}`}>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <span className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>trades</span>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <span className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>profits</span>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <span className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>losses</span>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <span className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>P/L</span>
        </div>
      </div>
      <div className={`h-[50%] w-full flex flex-row`}>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <span className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>{trades}</span>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <span className={`text-[1.1rem] ${dashboardState ? "textOn text-[#00afff]" : 'textOff'}`}>{ganancias}</span>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <span className={`text-[1.1rem] ${dashboardState ? `textOn text-[#ffa500]` : 'textOff'}`}>{perdidas}</span>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <span className={`text-[1.1rem] ${dashboardState ? `textOn ${Math.sign(pol) === 1 ? `text-green-600` : Math.sign(pol) === 0 ? '' : 'text-[#ffa500]'}` : 'textOff'}`}>
          {Math.sign(pol) === 1 ? `+$${pol.toFixed()}` : Math.sign(pol) === 0 ? `$${pol.toFixed()}` : `-$${Math.abs(pol).toFixed()}`}
          </span>
        </div>
      </div>
    </div>
  )
}
