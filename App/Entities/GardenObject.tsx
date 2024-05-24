import { Plant } from './Plant'; 
import { Decoration } from './Decoration'
import { Architecture } from './Architecture'
import { GardenObjectType } from './GardenObjectType';

export type GardenObject = Plant | Decoration | Architecture;
export abstract class GardenObjectProtocol {
    abstract getObjectType(): GardenObjectType;
}