import { create } from 'zustand';

interface footerInterface {
  footerState: boolean,
  changeFooterState: (currentState: boolean) => void
}

export const footerStore = create<footerInterface>((set) => ({
  footerState: false,
  changeFooterState: (currentState) => set(() => ({
    footerState: !currentState
  }))
}))