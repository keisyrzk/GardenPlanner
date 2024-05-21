import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import styles from '../Resources/styles';
import colors from '../Resources/colors';

const PlantListView = ({ navigation }) => {

    const [plants, setPlants] = useState<{ id: string; name: string }[]>([
        { id: '1', name: 'Rose' },
        { id: '2', name: 'Tulip' }
      ]);
    
      return (
        <ScrollView style={styles.scrollViewContentContainer}>
          <FlatList
            data={plants}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('PlantDetails', { plantId: item.id })}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      );
}

export default PlantListView;