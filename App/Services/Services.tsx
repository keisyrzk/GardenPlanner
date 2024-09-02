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
    plants:         baseUrl + '/1cd8354c-fb08-44a4-9602-c4b7351ae21f',
    decorations:    baseUrl + '/5b028742-0411-469d-84c0-c1ecfc07a1d3',
    architecture:   baseUrl + '/a25fe64a-3ad5-4ae8-b07e-b404d5564317'
}

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  }