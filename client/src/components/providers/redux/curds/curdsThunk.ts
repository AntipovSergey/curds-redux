import { createAsyncThunk } from '@reduxjs/toolkit';
import curdsService from '../../../../services/curdsService';
import type { CurdFormT, CurdT } from '../../../../types/curdsType';

export const getCurdsThunk = createAsyncThunk('/curds/getCurds', async () => {
  const data = await curdsService.getCurds();
  return data;
});

export const getOneCurdThunk = createAsyncThunk('/curds/getOneCurd', async (id: CurdT['id']) => {
  const data = await curdsService.getOneCurd(id);
  return data;
});

export const addOneCurd = createAsyncThunk('/curds/addOneCurd', async (formData: CurdFormT) => {
  const data = await curdsService.addOneCurd(formData);
  return data;
});

export const editOneCurd = createAsyncThunk(
  '/curds/editOneCurd',
  async ({ id, formData }: { id: CurdT['id']; formData: CurdFormT }) => {
    const data = await curdsService.editOneCurd(id, formData);
    return data;
  },
);

export const deleteOneCurd = createAsyncThunk('/curds/deleteOneCurd', async (id: CurdT['id']) => {
  await curdsService.deleteOneCurd(id);
  return id;
});
