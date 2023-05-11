import { create } from 'zustand';

interface storeInterface {
  chartFunctions: boolean,
  deleteToTrue: () => void,
  deleteToFalse: () => void,
}

export const chartFunctionsStore = create<storeInterface>((set) => ({
    chartFunctions: false,
    deleteToTrue: () => set(item => ({chartFunctions: true})),
    deleteToFalse: () => set(item => ({chartFunctions: false})),
}))
