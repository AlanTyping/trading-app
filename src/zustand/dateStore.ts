import { create } from 'zustand';
import { File } from '../routes/chart/interface';
import { getDate } from '../routes/chart/functions/functions';

interface dateInterface {
  date: string,
  setDate: (date: string) => void
}

export const dateStore = create<dateInterface>((set) => ({
  date: getDate(),
  setDate: (newDate: string) => set(() => ({
    date: newDate
  }))
}))