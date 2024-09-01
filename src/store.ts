import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the theme state
interface ThemeState {
  mode: 'light' | 'dark';
  primaryColor: string;
}

// Define the initial state
const initialState: ThemeState = {
  mode: 'light',
  primaryColor: '#D82530',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state: ThemeState, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
    setPrimaryColor: (state: ThemeState, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { setMode, setPrimaryColor } = themeSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;