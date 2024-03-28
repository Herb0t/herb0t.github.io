import { configureStore } from '@reduxjs/toolkit';
import { budgetReducer } from './reducers';

export const store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
});