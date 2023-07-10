import React from 'react'
import { dashboardStore } from '../../../../zustand/dashboardState';

export default function DashboardButton() {

  const { dashboardState, changeDashboardState} = dashboardStore();

  const changeState = () => {
    changeDashboardState(dashboardState);
  }

  return (
    <div className='bg-orange-600 h-full w-[55%] hover:cursor-pointer'
    onClick={changeState}>a</div>
  )
}
