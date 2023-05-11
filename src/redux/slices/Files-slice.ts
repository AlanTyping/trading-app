import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { File } from '../../routes/chart/interface';
import { useEffect } from 'react';
import { stringify } from 'querystring';

// Define the initial state using that type

const initialState: File[] = [];


export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<File>) => {
      state.push(action.payload)
    },
    deleteFile: (state, action: PayloadAction<File[]>) => {
      state = action.payload;
      return state;
    },
    deleteEveryFile: (state, action: PayloadAction<File[]>) => {
      state = action.payload
      return state;
    }
  }
})


export const { addFile, deleteFile, deleteEveryFile } = filesSlice.actions