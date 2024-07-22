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
    plants:         baseUrl + '/259bddbf-3518-4787-ab3b-063cb9745b46',
    decorations:    baseUrl + '/1cd91bcb-e1fc-4d9d-ae2b-33f42e17113b',
    architecture:   baseUrl + '/ef342bb4-5684-4b88-b246-fd6da62b8687'
}

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  }