import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;


export const deleteSlice = createSlice({
    name: 'decision',
    initialState,
    reducers: {
      showDecision: (state, action: PayloadAction<boolean>) => {
        state = action.payload
        return state
      }
    }

})


export const { showDecision } = deleteSlice.actions