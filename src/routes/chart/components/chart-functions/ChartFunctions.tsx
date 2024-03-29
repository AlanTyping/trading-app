import EliminarTodoDecision from './eliminar/EliminarDecision/EliminarTodoDecision';
import DataDownload from './data-download';
import { chartFunctionsStore } from '../../../../zustand/chartFunctionsStore';
import { deleteAllFilesDecision } from '../../../../zustand/deleteAllFilesDecision';
import './eliminar/EliminarDecision/eliminar.css';
import './chart-functions.css';

export default function ChartFunctions() {
  const decision = deleteAllFilesDecision(item => item.deleteDecision);
  const desactiveChartFunctions = chartFunctionsStore(item => item.deleteToFalse)

  return (
    <div id='chart-functions-container' className='absolute barlow inset-x-[-2%] inset-y-[-2%] bg-[#061333] z-[3] flex items-start justify-center flex-row text-white'>
      <button
        id='chart-functions-exit'
        className='h-[33%] top-[5%] celu-font-size w-[9%] text-[1.15rem] min-w-[70px] absolute left-4 rounded flex items-center
         justify-center hover:cursor-pointer hover:bg-[#0033a4] bg-[#0037b0]'
        onClick={desactiveChartFunctions}>
        Exit
      </button>

      <div id='chart-functions-buttons-container' className='flex items-center mt-[13px] justify-between w-[70%] h-full'>
        <div className='h-full w-[50%] flex items-center justify-end text-white flex-col'>
          <EliminarTodoDecision />
        </div>
        <div className='h-full w-[50%] flex items-center justify-end text-white flex-col'>
          <DataDownload />
        </div>
      </div>

    </div>
  );
}
