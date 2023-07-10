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
    <div className={`w-[65%] flex flex-col rounded z-[3] ${dashboardState ? "dashboardOn" : 'dashboardOff'} relative`} 
    id='dashboard'>
      <div className={`flex flex-row h-[50%] w-full ${dashboardState ? 'top-on' : 'top-off'}`}>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <h1 className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>trades</h1>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <h1 className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>profits</h1>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <h1 className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>losses</h1>
        </div>
        <div className='h-full w-[25%] flex justify-center items-center'>
          <h1 className={`text-[1.1rem] ${dashboardState ? "textOn" : 'textOff'}`}>P/L</h1>
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
          <span className={`text-[1.1rem] ${dashboardState ? `textOn ${Math.sign(pol) === 1 ? `text-green-600` : 'text-[orange]'}` : 'textOff'}`}>
          {Math.sign(pol) === 1 ? `+$${pol.toFixed()}` : Math.sign(pol) === 0 ? `$${pol.toFixed()}` : `-$${pol.toFixed()}`}
          </span>
        </div>
      </div>
    </div>
  )
}
