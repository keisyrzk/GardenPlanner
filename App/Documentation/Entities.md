
# Class vs Interface

## Key Differences

### Implementation
Interfaces
- define structure

classes
- define structure and implementation

### Inheritance:
Interfaces
- support multiple inheritance

classes 
- support single inheritance

### Static Members:
Interfaces 
- cannot have static members

classes 
- can have static members

### Runtime Presence:
Interfaces 
- do not exist at runtime

classes 
- do exist at runtime

### Use Cases:
Interfaces for 
- type-checking
- contracts

classes for 
- creating objects with behavior and state

---------------------------------------------------------------

# JSON data example

```TypeScript
const jsonData: GardenObject[] = [
  {
    type: GardenObjectType.PlantType.Flower,
    name: 'Rose',
    maxHeight: 1.2,
    maxWidth: 0.5
  },
  {
    type: GardenObjectType.PlantType.Tree,
    name: 'Oak',
    maxHeight: 20,
    maxWidth: 10
  },
  {
    type: GardenObjectType.PlantType.Bush,
    name: 'Holly',
    maxHeight: 2.5,
    maxWidth: 2.5
  },
  {
    type: GardenObjectType.DecorationType.Flowerpot,
    width: 0.5,
    depth: 0.5,
    height: 0.6
  },
  {
    type: GardenObjectType.DecorationType.Fountain,
    width: 2.0,
    depth: 2.0,
    height: 1.5
  },
  {
    type: GardenObjectType.ArchitectureType.Pergola,
    width: 3.0,
    depth: 4.0,
    height: 2.5
  },
  {
    type: GardenObjectType.ArchitectureType.Patio,
    width: 5.0,
    depth: 5.0,
    height: 0.2
  },
  {
    type: GardenObjectType.ArchitectureType.Pathway,
    width: 1.0,
    depth: 10.0,
    height: 0.1
  },
  {
    type: GardenObjectType.ArchitectureType.Swing,
    width: 1.5,
    depth: 1.5,
    height: 2.0
  }
];
```

