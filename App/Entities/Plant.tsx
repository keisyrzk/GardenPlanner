import { GardenObjectProtocol } from './GardenObject'
import { GardenObjectType } from './GardenObjectType'

export class Plant extends GardenObjectProtocol {
  id: string;
  type: GardenObjectType.PlantType;
  name: string;
  maxHeight: number;
  maxWidth: number;

  constructor(id: string, type: GardenObjectType.PlantType, name: string, maxHeight: number, maxWidth: number) {
    super();
    this.id = id;
    this.type = type;
    this.name = name;
    this.maxHeight = maxHeight;
    this.maxWidth = maxWidth;
  }

  getObjectType(): GardenObjectType {
    return GardenObjectType.Plant;
  }

  title(): string {
    return this.name;
  }
}