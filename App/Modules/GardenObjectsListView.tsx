import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SectionList, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../Resources/colors';
import { GardenObject } from '../Entities/GardenObject'
import { Plant } from '../Entities/Plant'
import { Decoration } from '../Entities/Decoration';
import { Architecture } from '../Entities/Architecture';

const GardenObjectsListView = ({
  plants,
  decorations,
  architecture
} : {
  plants: Plant[];
  decorations: Decoration[];
  architecture: Architecture[];
}) => {
      type GardenSection = {
        title: string;
        data: GardenObject[];
      };

      const sections: GardenSection[] = [
        {
          title: 'Plants',
          data: plants.map(plant => new Plant(plant.id, plant.type, plant.name, plant.maxHeight, plant.maxWidth))
        },
        {
          title: 'Decorations',
          data: decorations.map(decoration => new Decoration(decoration.id, decoration.type, decoration.name, decoration.width, decoration.height, decoration.depth))
        },
        {
          title: 'Architectures',
          data: architecture.map(architecture => new Architecture(architecture.id, architecture.type, architecture.name, architecture.width, architecture.height, architecture.depth))
        }
      ];
      
      const renderItem = (item: GardenObject) => {
        
        return <Text style={styles.listItem}>{item.title()}</Text>
        // switch (item.getObjectType()) {
        //   case GardenObjectType.Plant:
        //     const plant = item as Plant;
        //     return <Text style={styles.listItem}>{plant.name}</Text>
  
        //   case GardenObjectType.Decoration:
        //     const decoration = item as Decoration;
        //     return <Text style={styles.listItem}>{decoration.width} x {decoration.height} x {decoration.depth} [m]</Text>

        //   case GardenObjectType.Architecture:
        //     const architecture = item as Architecture;
        //     return <Text style={styles.listItem}>{architecture.width} x {architecture.height} x {architecture.depth} [m]</Text>
        // }
      };

      const itemSeparator = () => (
        <View style={styles.separator} />
      );

      return (
        <SectionList
          sections={sections}
          keyExtractor={(item, _) => item.id.toString()}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          renderItem={({item}) => (
            <View style={styles.listItemContainer}>
              {renderItem(item)}
            </View>
          )}
          ItemSeparatorComponent={itemSeparator}
        />
      );
};

export default GardenObjectsListView;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flex: 1,
    padding: 10
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkGold,
    backgroundColor: colors.darkBackground,
    padding: 5
  },
  separator: {
    height: 1
  },
  listItemContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: colors.background
  },
  listItem: {
    color: colors.grayWhite
  }
});

/*
  Alternative approach - sample mocked data

      const [gardenObjects, setGardenObjects] = useState<GardenObject[]>([
      new Plant('p1', GardenObjectType.PlantType.Tree, 'Oak', 20, 10),
      new Decoration('d1', GardenObjectType.DecorationType.Flowerpot, 0.5, 0.5, 0.6),
      new Architecture('a1', GardenObjectType.ArchitectureType.Pergola, 3.0, 4.0, 2.5)
    ]);

      create main sections 
      const plantObjects = gardenObjects.filter((gardenObject): gardenObject is Plant => {
        return Object
                .values(GardenObjectType.PlantType)
                .includes(gardenObject.type as GardenObjectType.PlantType);
      });

      const decorationsObjects = gardenObjects.filter((gardenObject): gardenObject is Decoration => {
        return Object
                .values(GardenObjectType.DecorationType)
                .includes(gardenObject.type as GardenObjectType.DecorationType);
      });

      const architectureObjects = gardenObjects.filter((gardenObject): gardenObject is Architecture => {
        return Object
                .values(GardenObjectType.ArchitectureType)
                .includes(gardenObject.type as GardenObjectType.ArchitectureType);
      });

*/