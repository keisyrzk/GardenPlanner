/** Samples:

    const myPlant: GardenObjectType = GardenObjectType.PlantType.Bush;
    const myArchitecture: GardenObjectType = GardenObjectType.ArchitectureType.Patio;
    const myDecoration: GardenObjectType = GardenObjectType.DecorationType.Fountain;
 */

export enum GardenObjectType {
  Plant,
  Architecture,
  Decoration
}

export namespace GardenObjectType {
  export enum PlantType {
    Flower = "flower",
    Tree = "tree",
    Bush = "bush"
  }
  
  export enum DecorationType {
    Flowerpot = "flowerpot",
    Fountain = "fountain"
  }
  
  export enum ArchitectureType {
    Pergola = "pergola",
    Patio = "patio",
    Pathway = "pathway",
    Swing = "swing"
  }

  // returns the name of the GardenObjectType
  export function getName(type: GardenObjectType): string {
    switch (type) {
      case GardenObjectType.Plant:
        return "Plant";
      case GardenObjectType.Architecture:
        return "Architecture";
      case GardenObjectType.Decoration:
        return "Decoration";
      default:
        return "Unknown";
    }
  }
}