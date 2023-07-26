import { dashboardStore } from '../../../../zustand/dashboardState';
import { DashboardSvg } from './DashboardSvg';

export default function DashboardButton() {

  const { dashboardState, changeDashboardState} = dashboardStore();

  const changeState = () => {
    changeDashboardState(dashboardState);
  }

  return (
    <div
    id='dashboard-button'
     className='w-[65%] h-[160%] border-[1px] border-blue-800 flex items-center
    justify-center text-white hover:cursor-pointer rounded-md'
    onClick={changeState}>
      <DashboardSvg />
    </div>
  )
}
