import React, {useEffect, useState} from 'react';
import colors from '../Resources/colors';
import { View, Text, StyleSheet } from 'react-native';
import { GardenObjectDetailsProps } from './AppNavigation';
import { GardenObjectType } from '../Entities/GardenObjectType';
import { Architecture } from '../Entities/Architecture';
import { Decoration } from '../Entities/Decoration';
import { Plant } from '../Entities/Plant';

function GardenObjectDetailsView({route}: GardenObjectDetailsProps) {
    const {gardenObject} = route.params;

    const objectView = () => {
        switch (gardenObject.getObjectType()) {
          case GardenObjectType.Plant:
            const plant = gardenObject as Plant;
            return (
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.textItem}>{plant.name}</Text>

                  <Text style={styles.title}>Maximum width</Text>
                  <Text style={styles.textItem}>{plant.maxWidth}</Text>

                  <Text style={styles.title}>Maximum height</Text>
                  <Text style={styles.textItem}>{plant.maxHeight}</Text>
                </View>
              );
      
          case GardenObjectType.Decoration:
            const decoration = gardenObject as Decoration;
            return (
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.textItem}>{decoration.name}</Text>

                  <Text style={styles.title}>Width</Text>
                  <Text style={styles.textItem}>{decoration.width} m</Text>
                  
                  <Text style={styles.title}>Depth</Text>
                  <Text style={styles.textItem}>{decoration.depth} m</Text>

                  <Text style={styles.title}>Height</Text>
                  <Text style={styles.textItem}>{decoration.height} m</Text>
                </View>
              );
      
          case GardenObjectType.Architecture:
            const architecture = gardenObject as Architecture;
            return (
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.textItem}>{architecture.name}</Text>

                  <Text style={styles.title}>Width</Text>
                  <Text style={styles.textItem}>{architecture.width} m</Text>
                  
                  <Text style={styles.title}>Depth</Text>
                  <Text style={styles.textItem}>{architecture.depth} m</Text>

                  <Text style={styles.title}>Height</Text>
                  <Text style={styles.textItem}>{architecture.height} m</Text>
                </View>
              );
      
          default:
            return null;
        }
      };

    return (
        <View style={styles.contentContainer}>
            {objectView()}
        </View>
    );
}

export default GardenObjectDetailsView;

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      backgroundColor: colors.darkBackground
    },
    title: {
        color: colors.darkGold,
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingLeft: 8
    },
    textItem: {
        color: colors.grayWhite,
        fontSize: 16,
        paddingLeft: 16
    }
  });