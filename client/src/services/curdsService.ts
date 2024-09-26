import type { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import type { CurdFormT, CurdT } from '../types/curdsType';
import { curdSchema } from '../utils/validation';
import axiosInstance from './axiosInstance';

class CurdService {
  constructor(private readonly client: AxiosInstance) {}

  async getCurds(): Promise<CurdT[]> {
    try {
      const response = await this.client<CurdT[]>('/curds');
      if (response.status !== 200) {
        throw new Error('Неверный статус получения сырков');
      }
      return curdSchema.array().parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка получения сырков в сервисе', error);
      }
      return Promise.reject(error);
    }
  }

  async getOneCurd(id: CurdT['id']): Promise<CurdT> {
    try {
      const response = await this.client<CurdT>(`/curds/${id}`);
      if (response.status !== 200) {
        throw new Error('Неверный статус получения сырка');
      }
      return curdSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка получения сырка в сервисе', error);
      }
      return Promise.reject(error);
    }
  }

  async addOneCurd(formData: CurdFormT): Promise<CurdT> {
    try {
      const response = await this.client.post<CurdFormT>('/curds', formData);
      if (response.status !== 200) {
        throw new Error('Неверный статус получения сырка');
      }
      return curdSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка добавления сырка в сервисе', error);
      }
      return Promise.reject(error);
    }
  }

  async editOneCurd(id: CurdT['id'], formData: CurdFormT): Promise<CurdT> {
    try {      
      const response = await this.client.patch<CurdFormT>(`/curds/${id}`, formData);
      console.log(response);
      
      if (response.status !== 201) {
        throw new Error('Неверный статус изменения сырка');
      }
      console.log(response.data);
      
      return curdSchema.parse(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка добавления сырка в сервисе', error);
      }
      return Promise.reject(error);
    }
  }

  async deleteOneCurd(id: CurdT['id']): Promise<CurdT['id']> {
    try {
      const response = await this.client.delete(`/curds/${id}`);
      if (response.status !== 204) {
        throw new Error('Неверный статус удаления сырка');
      }
      return id;
    } catch (error) {
      if (error instanceof ZodError) {
        console.log('ZOD ERROR', error.issues);
      } else {
        console.log('Ошибка добавления сырка в сервисе', error);
      }
      return Promise.reject(error);
    }
  }
}

export default new CurdService(axiosInstance);
