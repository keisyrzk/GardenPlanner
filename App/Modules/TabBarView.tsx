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

/**
 * TabBarView component that displays a tab bar with two tabs: List and Plan.
 * @param {TabBarViewProps} props - The properties passed to the component.
 */
const TabBarView = ({
  onTabPress,
}: {
  onTabPress: TabBarViewProps['onTabPress'];
}) => {
    
    // Initial selection of the `list` tab
    const [selectedTab, setSelectedTab] = useState<TabType>(TabType.list);

    /**
     * Handles the press event on a tab bar button.
     * @param {TabType} tabType - The type of the tab that was pressed.
     */
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

/**
 * TabBarButton component that represents an individual tab in the tab bar.
 * @param {Object} props - The properties passed to the component.
 * @param {TabType} props.tabType - The type of the tab.
 * @param {TabType} props.selectedTab - The currently selected tab.
 * @param {TabBarViewProps['onTabPress']} props.onTabPress - The function to call when the tab is pressed.
 */
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
    backgroundColor: colors.gold,
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
    color: colors.gold,
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
