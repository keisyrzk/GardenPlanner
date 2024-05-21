/** Samples:

    const myPlant: GardenObjectType = GardenObjectType.PlantType.Bush;
    const myArchitecture: GardenObjectType = GardenObjectType.ArchitectureType.Patio;
    const myDecoration: GardenObjectType = GardenObjectType.DecorationType.Fountain;
 */

enum GardenObjectType {
  Plant,
  Architecture,
  Decoration
}

namespace GardenObjectType {
  export enum PlantType {
    Flower,
    Tree,
    Bush
  }
  
  export enum DecorationType {
    Flowerpot,
    Fountain
  }
  
  export enum ArchitectureType {
    Pergola,
    Patio,
    Pathway,
    Swing
  }
}