import { NavigationContainer } from '@react-navigation/native';
import PlantListView from './PlantListView';

import {
    StackScreenProps,
    createStackNavigator,
  } from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainView}
          options={{
            title: 'Main',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PlantListView"
          component={PlantListView}
          options={{title: 'Plant list'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;