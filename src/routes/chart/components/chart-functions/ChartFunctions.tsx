import EliminarTodoDecision from '../eliminar/EliminarTodoDecision';
import DataDownload from '../chart-data-management/data-download';
import { chartFunctionsStore } from '../../../../zustand/chartFunctionsStore';
import { deleteAllFilesDecision } from '../../../../zustand/deleteAllFilesDecision';
import { ExitSvg } from './ExitSvg';

export default function ChartFunctions() {
  const decision = deleteAllFilesDecision(item => item.deleteDecision);
  const desactiveChartFunctions = chartFunctionsStore(item => item.deleteToFalse)

  return (
    <div className='absolute inset-x-0 inset-y-0  bg-[rgba(0,0,0,0.8)] z-[3] flex items-start justify-center flex-col bg-gray-900 text-white'>
      <button className='h-[20%] w-full flex items-center justify-center hover:cursor-pointer bg-blue-800' 
      onClick={desactiveChartFunctions}>Come back</button>
      <div className='flex items-start justify-center flex-row h-[80%] w-full'>
        <div className='h-full w-[50%] bg-[#3c1313] flex items-center justify-center text-white flex-col'>
          <EliminarTodoDecision />
        </div>
        <div className='h-full w-[50%] bg-[#0f2257] flex items-center justify-center text-white flex-col'>
          <DataDownload />
        </div>
      </div>
    </div>
  );
}
