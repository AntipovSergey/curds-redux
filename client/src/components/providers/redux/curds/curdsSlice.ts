import { createSlice } from '@reduxjs/toolkit';
import type { CurdT } from '../../../../types/curdsType';
import {
  addOneCurd,
  deleteOneCurd,
  editOneCurd,
  getCurdsThunk,
  getOneCurdThunk,
} from './curdsThunk';

export type CurdsState = {
  curds: CurdT[];
  currentCurd: CurdT | null;
  error: string | null;
  showCurd: CurdT | null;
};

const initialState: CurdsState = {
  curds: [],
  currentCurd: null,
  error: null,
  showCurd: null,
};

export const curdsSlice = createSlice({
  name: 'curds',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
    showModal: (state, action) => {
      console.log(action.payload);

      const curd = state.curds.find((el) => el.id === action.payload) || null; // Immer
      console.log(JSON.parse(JSON.stringify(curd)));

      state.showCurd = curd;
    },
    closeModal: (state) => {
      state.showCurd = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurdsThunk.fulfilled, (state, action) => {
        state.curds = [...action.payload];
      })
      .addCase(getCurdsThunk.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      })
      .addCase(getOneCurdThunk.fulfilled, (state, action) => {
        state.currentCurd = action.payload;
      })
      .addCase(getOneCurdThunk.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      })
      .addCase(addOneCurd.fulfilled, (state, action) => {
        state.curds = [action.payload, ...state.curds];
      })
      .addCase(addOneCurd.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      })
      .addCase(deleteOneCurd.fulfilled, (state, action) => {
        state.curds = state.curds.filter((curd) => curd.id !== action.payload);
      })
      .addCase(deleteOneCurd.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      })
      .addCase(editOneCurd.fulfilled, (state, action) => {
        state.curds = state.curds.map((curd) =>
          curd.id === action.payload.id ? action.payload : curd,
        );
        state.currentCurd = action.payload;
      })
      .addCase(editOneCurd.rejected, (state) => {
        state.error = 'Ошибка подгрузки данных';
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetError, showModal, closeModal } = curdsSlice.actions;

export default curdsSlice.reducer;
