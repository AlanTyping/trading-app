import { create } from 'zustand';

interface dashboardInterface {
  dashboardState: boolean,
  changeDashboardState: (currentState: boolean) => void
}

export const dashboardStore = create<dashboardInterface>((set) => ({
  dashboardState: false,
  changeDashboardState: (currentState) => set(() => ({
    dashboardState: !currentState
  }))
}))