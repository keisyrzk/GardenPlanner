import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../Resources/colors';

interface TabBarViewProps {
  onTabPress: (tabType: TabType) => void;
}

export enum TabType {
  list = 'List',
  plan = 'Plan'
}

const TabBarView = ({
  onTabPress,
}: {
  onTabPress: TabBarViewProps['onTabPress'];
}) => {
    
    // initial selection `list` tab
    const [selectedTab, setSelectedTab] = useState<TabType>(TabType.list);
    const handleTabBarPress = (tabType: TabType) => {
        setSelectedTab(tabType);
        onTabPress(tabType);
    };

  return (
    <View style={styles.tabBarViewContainer}>
      <View style={styles.tabBarLine} />
      <View style={styles.tabBarTabsContainer}>
      {Object.values(TabType).map(tabType => (
          <TabBarButton
            key={tabType}
            tabType={tabType}
            selectedTab={selectedTab}
            onTabPress={handleTabBarPress}
          />
        ))}
      </View>
    </View>
  );
};

const TabBarButton = ({
  tabType,
  selectedTab,
  onTabPress,
}: {
  tabType: TabType;
  selectedTab: TabType;
  onTabPress: TabBarViewProps['onTabPress'];
}) => {
  const isSelected = tabType === selectedTab;

  return (
    <TouchableOpacity onPress={() => onTabPress(tabType)} style={styles.tabBarButton}>
      <Text
        style={
          isSelected
            ? styles.tabBarButtonText_selected
            : styles.tabBarButtonText_notSelected
        }>
        {tabType}
      </Text>
    </TouchableOpacity>
  );
};

export default TabBarView;

const styles = StyleSheet.create({
  tabBarViewContainer: {
    height: 60
  },
  tabBarTabsContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darkBackground,
    paddingHorizontal: 20,
  },
  tabBarLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.purple,
    marginBottom: 0,
  },
  tabBarButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabBarButtonText_notSelected: {
    color: colors.grayWhite,
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'normal',
  },
  tabBarButtonText_selected: {
    color: colors.purple,
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
});