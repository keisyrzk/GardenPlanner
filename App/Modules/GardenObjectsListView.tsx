import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SectionList, Text, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import colors from '../Resources/colors';
import { GardenObject } from '../Entities/GardenObject'
import { GardenObjectType } from '../Entities/GardenObjectType';
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
          data: plants
        },
        {
          title: 'Decorations',
          data: decorations
        },
        {
          title: 'Architectures',
          data: architecture
        }
      ];
      
      const renderItem = ({ item }: { item: GardenObject }) => {
        switch (item.getObjectType()) {
          case GardenObjectType.Plant:
            const plant = item as Plant;
            return <Text>{ plant.name }</Text>
  
          case GardenObjectType.Decoration:
            const decoration = item as Decoration;
            return <Text>{decoration.width} x {decoration.height} x {decoration.depth} [m]</Text>

          case GardenObjectType.Architecture:
            const architecture = item as Architecture;
            return <Text>{architecture.width} x {architecture.height} x {architecture.depth} [m]</Text>
        }
      };

      return (
        <ScrollView style={styles.scrollViewContentContainer}>
          tutaj jest jakks problem z renderem
          {/* <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.id}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
            renderItem={ renderItem }
          /> */}
        </ScrollView>
      );
};

export default GardenObjectsListView;

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flex: 1,
    padding: 10
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: 5
  },
  item: {
    fontSize: 14,
    paddingLeft: 20,
    paddingVertical: 2
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
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