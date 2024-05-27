import { plants } from './PlantsServices'
import { decorations } from './DecorationsServices';
import { architecture } from './ArchitectureServices'

let baseUrl = 'https://mocki.io/v1';

export const services = {
    garden: {
      plants: plants,
      decorations: decorations,
      architecture: architecture
    },
};

export const baseEndpoints = {
    plants:         baseUrl + '/9da82441-6fe4-4688-9f9c-79960d83b5c8',
    decorations:    baseUrl + '/be065f13-e279-46b7-b35b-a508361f4842',
    architecture:   baseUrl + '/226db070-bfb6-44bc-807c-e3d4154811e7'
}

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  }