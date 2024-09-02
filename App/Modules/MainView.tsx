import React, { useState, useEffect } from 'react';
import colors from '../Resources/colors';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import TabBarView, { TabType } from './TabBarView';
import { useNavigation } from '@react-navigation/native';
import { MainProps } from './AppNavigation';
import { useQuery } from '@tanstack/react-query'
import { services } from '../Services/Services';
import GardenPlanView from './GardenPlanView';
import GardenObjectsListView from './GardenObjectsListView';

const MainView = ({ route }: MainProps) => {
  const [tabType, setTabType] = useState(TabType.list); // Manage the selected tab type
  const navigation = useNavigation<MainProps['navigation']>();

  // Fetch plants data
  const { data: plants, isSuccess: isPlantsFetchSuccessful, refetch: plantsRefetch } = useQuery({
    queryKey: ['plants'],
    queryFn: () => services.garden.plants.getAll(),
  })

  // Fetch decorations data
  const { data: decorations, isSuccess: isDecorationsFetchSuccessful, refetch: decorationsRefetch } = useQuery({
    queryKey: ['decorations'],
    queryFn: () => services.garden.decorations.getAll(),
  })


  // Fetch architecture data
  const { data: architecture, isSuccess: isArchitectureFetchSuccessful, refetch: architectureRefetch } = useQuery({
    queryKey: ['architecture'],
    queryFn: () => services.garden.architecture.getAll(),
  })
  

  /**
   * Refreshes the data by refetching plants, decorations, and architecture.
   */
  const onRefresh = () => {
    plantsRefetch();
    decorationsRefetch();
    architectureRefetch();
  };

  /**
   * Handles tab bar press events.
   * @param {TabType} newTabType - The new tab type that was pressed.
   */
  const handleTabBarPress = async (newTabType) => {
    console.log('Tab pressed:', newTabType);
    switch (newTabType) {
      case TabType.list:
        onRefresh();
        break;
      case TabType.plan:
        // Add any data fetching or processing related to the plan tab here
        break;
      default:
        console.error('Unknown tab type:', newTabType);
        break;
    }
    setTabType(newTabType);
  };

  useEffect(() => {
    console.log('Tab type changed:', tabType);
  }, [tabType]);

  // Determine the content to display based on the selected tab
  let tabContent = null;
  switch (tabType) {
    case TabType.list:
      tabContent = (
        (isPlantsFetchSuccessful && isDecorationsFetchSuccessful && isArchitectureFetchSuccessful) ? (
           <GardenObjectsListView
            plants={plants}
            decorations={decorations}
            architecture={architecture}
          />
        ) : (
          <View style={styles.centeredContent}>
            <ActivityIndicator size="large" color={colors.gold} />
            <Text style={styles.text}>Loading data...</Text>
          </View>
        )
      );
      break;
    case TabType.plan:
      tabContent = <GardenPlanView />;
      break;
    default:
      tabContent = (
        <View style={styles.centeredContent}>
          <Text style={styles.text}>No content available</Text>
        </View>
      );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{tabContent}</View>
      <TabBarView onTabPress={handleTabBarPress} />
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.darkBackground,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
