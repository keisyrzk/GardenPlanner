import { Plant } from '../Entities/Plant';
import { baseEndpoints, fetchData } from './Services';

export const plants = {
    getAll: async (): Promise<Plant[]> => {
        console.log('::: PLANTS getAll called :::');
        return fetchData<Plant[]>(baseEndpoints.plants);
    },

    get: async (id: string): Promise<Plant | null> => {
        return fetchData<Plant | null>(`${baseEndpoints.plants}/${id}`);
    },
  };