import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import colors from '../Resources/colors';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MainView from './MainView';

import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();
const AppNavigation = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
    <SafeAreaView style={styles.contentContainer}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainView}
          options={{
            title: 'Main',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
    </QueryClientProvider>
  );
};

type RootStackParamList = {
  Main: undefined;
};

export type MainProps = NativeStackScreenProps<
  RootStackParamList,
  'Main',
  'Main_id'
>;

export default AppNavigation;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.darkBackground
  }
});