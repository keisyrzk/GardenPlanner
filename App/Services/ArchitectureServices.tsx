import { Architecture } from '../Entities/Architecture';
import { baseEndpoints, fetchData } from './Services';

export const architecture = {
    getAll: async (): Promise<Architecture[]> => {
        return fetchData<Architecture[]>(baseEndpoints.architecture);
    },

    get: async (id: string): Promise<Architecture | null> => {
        return fetchData<Architecture | null>(`${baseEndpoints.architecture}/${id}`);
    },
  };