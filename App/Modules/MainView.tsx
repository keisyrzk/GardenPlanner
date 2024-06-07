import React, { useState, useEffect } from 'react';
import colors from '../Resources/colors';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import TabBarView, { TabType } from './TabBarView';
import { useNavigation } from '@react-navigation/native';
import { MainProps } from './AppNavigation';
import { useQuery } from 'react-query';
import { services } from '../Services/Services';
import { Plant } from '../Entities/Plant';
import { Decoration } from '../Entities/Decoration';
import { Architecture } from '../Entities/Architecture';
import GardenPlanView from './GardenPlanView';
import GardenObjectsListView from './GardenObjectsListView';

const MainView = ({ route }: MainProps) => {
  const [tabType, setTabType] = useState(TabType.list); // Manage the selected tab type
  const navigation = useNavigation<MainProps['navigation']>();

  // Fetch plants data
  const plantsQuery = useQuery<Plant[]>('plants', services.garden.plants.getAll, {
    onSuccess: (data) => {
      console.log('Fetched plants:', data);
    },
    onError: (err) => {
      console.log('Fetching error:', err);
    },
  });

  // Fetch decorations data
  const decorationsQuery = useQuery<Decoration[]>('decorations', services.garden.decorations.getAll, {
    onSuccess: (data) => {
      console.log('Fetched decorations:', data);
    },
    onError: (err) => {
      console.log('Fetching error:', err);
    },
  });

  // Fetch architecture data
  const architectureQuery = useQuery<Architecture[]>('architecture', services.garden.architecture.getAll, {
    onSuccess: (data) => {
      console.log('Fetched architecture:', data);
    },
    onError: (err) => {
      console.log('Fetching error:', err);
    },
  });

  /**
   * Refreshes the data by refetching plants, decorations, and architecture.
   */
  const onRefresh = () => {
    plantsQuery.refetch();
    decorationsQuery.refetch();
    architectureQuery.refetch();
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
        (plantsQuery.isLoading || decorationsQuery.isLoading || architectureQuery.isLoading) ? (
          <View style={styles.centeredContent}>
            <ActivityIndicator size="large" color={colors.gold} />
            <Text style={styles.text}>Loading data...</Text>
          </View>
        ) : (
          <GardenObjectsListView
            plants={plantsQuery.data}
            decorations={decorationsQuery.data}
            architecture={architectureQuery.data}
          />
        )
      );
      break;
    case TabType.plan:
      tabContent = <GardenPlanView navigation={undefined} />;
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
