import { create } from 'zustand';
import { File } from '../routes/chart/interface';

interface storeInterface {
  files: File[]
  addFile: (file: File) => void
  addFiles: (data: File[]) => void
  removeFile: (data: File[]) => void
  removeFiles: () => void
}

export const chartStore = create<storeInterface>((set) => ({
  files: [],
  addFile: (file: File) => set(state => ({
    files: [...state.files, file]
  })),
  addFiles: (data: File[]) => set(state => ({files: data})),
  removeFile: (data: File[]) => set(state => ({files: data})),
  removeFiles: () => set(state => ({ files: [] }))
}))
