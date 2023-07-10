import { create } from 'zustand';
import { File } from '../routes/chart/interface';
import { getDate } from '../routes/chart/functions';

interface dateInterface {
  date: string,
  dateState: boolean,
  changeDateState: (newState: boolean) => void,
  setDate: (date: string) => void
}

export const dateStore = create<dateInterface>((set) => ({
  date: getDate(),
  dateState: false,
  changeDateState: (newState) => set(() => ({
    dateState: newState
  })),
  setDate: (newDate: string) => set(() => ({
    date: newDate
  }))
}))