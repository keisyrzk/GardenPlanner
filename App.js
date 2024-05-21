import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlantList from './App/Modules/PlantList/PlantList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GardenPlan">
        <Stack.Screen name="PlantList" component={PlantList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}