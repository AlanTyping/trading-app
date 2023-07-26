import { SvgIcon } from './SvgIcon';
import { chartFunctionsStore } from '../../../../zustand/chartFunctionsStore';

export default function ChartFunctionsButton() {
  const activateChartFunctions = chartFunctionsStore(item => item.deleteToTrue)
  return (
    <>
      {
        (
          <div
            onClick={activateChartFunctions}
            id='chart-functions-button'
            className='w-[65%] h-[160%] border-[1px] border-blue-800 flex items-center
               justify-center text-white hover:cursor-pointer rounded-md'>
            <SvgIcon />
          </div>
        )
      }
    </>
  );
}
