import { Decoration } from '../Entities/Decoration';
import { baseEndpoints, fetchData } from './Services';

export const decorations = {
    getAll: async (): Promise<Decoration[]> => {
        return fetchData<Decoration[]>(baseEndpoints.decorations);
    },

    get: async (id: string): Promise<Decoration | null> => {
        return fetchData<Decoration | null>(`${baseEndpoints.decorations}/${id}`);
    },
  };