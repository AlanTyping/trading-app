import EliminarTodoDecision from '../eliminar/EliminarTodoDecision';
import DataDownload from '../chart-data-management/data-download';
import { chartFunctionsStore } from '../../../../zustand/chartFunctionsStore';
import { deleteAllFilesDecision } from '../../../../zustand/deleteAllFilesDecision';
import { ExitSvg } from './ExitSvg';

export default function ChartFunctions() {
  const decision = deleteAllFilesDecision(item => item.deleteDecision);
  const desactiveChartFunctions = chartFunctionsStore(item => item.deleteToFalse)

  return (
    <div className='absolute inset-x-0 inset-y-0 bg-[#061333] z-[3] flex items-start justify-center flex-row text-white'>
      <div id='chart-functions-buttons-container' className='flex items-center mt-[13px] justify-center justify-between w-[70%] h-full'>
        <div className='h-full w-[50%] flex items-center justify-center text-white flex-col'>
          <EliminarTodoDecision />
        </div>
        <div className='h-full w-[50%] flex items-center justify-center text-white flex-col'>
          <DataDownload />
        </div>
      </div>
      <button
        id='chart-functions-exit'
        className='h-[30%] w-[12%] min-w-[70px] absolute left-4 rounded border-[1px] border-blue-600 top-2 flex items-center
         justify-center hover:cursor-pointer hover:bg-[#0047e1] bg-[#002e93]'
        onClick={desactiveChartFunctions}>Exit</button>
    </div>
  );
}
