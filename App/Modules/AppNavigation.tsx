import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import colors from '../Resources/colors';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MainView from './MainView';
import GardenObjectDetailsView from './GardenObjectDetailsView';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { GardenObject } from '../Entities/GardenObject';

// Define the types for the navigation stack parameters
type RootStackParamList = {
  Main: undefined; // No parameters expected for Main
  GardenObjectDetails: {
    gardenObject: GardenObject; // gardenObject parameter expected for GardenObjectDetails
  };
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Create a QueryClient instance for react-query
const queryClient = new QueryClient();

/**
 * AppNavigation component that sets up the navigation structure of the app.
 * It includes the Main view and the GardenObjectDetails view.
 */
const AppNavigation = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaView style={styles.contentContainer}>
          <StatusBar barStyle="light-content" />
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.background,
              },
              headerTintColor: colors.gold,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen
              name="Main"
              component={MainView}
              options={{
                title: 'Main',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="GardenObjectDetails"
              component={GardenObjectDetailsView}
              options={{
                title: 'Garden Object Details',
                headerShown: true,
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export type MainProps = NativeStackScreenProps<
  RootStackParamList,
  'Main',
  'Main_id'
>;

export type GardenObjectDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'GardenObjectDetails',
  'GardenObjectDetails_id'
>;

export default AppNavigation;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
});
