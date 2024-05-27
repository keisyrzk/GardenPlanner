import { GardenObjectProtocol } from './GardenObject'
import { GardenObjectType } from './GardenObjectType'

export class Architecture extends GardenObjectProtocol {
    id: string;
    type: GardenObjectType.ArchitectureType;
    width: number;
    depth: number;
    height: number;

    constructor(id: string, type: GardenObjectType.ArchitectureType, width: number, depth: number, height: number) {
      super();
      this.id = id;
      this.type = type;
      this.width = width;
      this.depth = depth;
      this.height = height;
    }

    getObjectType(): GardenObjectType {
      return GardenObjectType.Architecture;
    }
  }