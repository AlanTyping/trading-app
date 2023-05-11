import { configureStore } from '@reduxjs/toolkit';
import { filesSlice, deleteSlice, deleteEverythingSlice } from './slices';
// ...


export const store = configureStore({
  reducer: {
    fileReducer: filesSlice.reducer,
    deleteReducer: deleteSlice.reducer,
    deleteEverythingReducer: deleteEverythingSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch