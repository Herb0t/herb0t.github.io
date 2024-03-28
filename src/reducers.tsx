import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  // Define the structure of a transaction here
  date: string;
  transaction: string;
  loads: number;
  withdraws: number;
  balance: number;
  note: string;
}

const initialState = {
  transactions: [] as Transaction[], // array of transactions
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction } = budgetSlice.actions;
export const budgetReducer = budgetSlice.reducer;