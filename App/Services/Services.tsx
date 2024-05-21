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
    plants:         baseUrl + '/3dcd4a61-5ff3-4b24-8ffe-37e003635b7f',
    decorations:    baseUrl + '/2b310e66-3644-40f5-a803-fd2f8a51127e',
    architecture:   baseUrl + '/ef1941c8-8f48-4b4f-a622-b9f6aa364fe7'
}

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  }