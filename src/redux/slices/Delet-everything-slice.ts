import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = false;


export const deleteEverythingSlice = createSlice({
    name: 'decision',
    initialState,
    reducers: {
      showEverythingDecision: (state, action: PayloadAction<boolean>) => {
        state = action.payload
        return state
      }
    }

})


export const { showEverythingDecision } = deleteEverythingSlice.actions