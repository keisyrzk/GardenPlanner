# `useCallback` Hook

## Purpose
The `useCallback` hook is used to memoize callback functions, preventing unnecessary recreations of the function on every render. This optimization can improve performance, especially when passing callbacks to child components.

## Example Usage

```TypeScript
import React, { useCallback } from 'react';

// A function to render section headers in a SectionList
const renderSectionHeader = useCallback(({ section: { title, data } }) => {
  const sectionObjectType = data[0]?.getObjectType();
  return (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeader}>{title}</Text>
      <TouchableOpacity
          style={styles.addButton}
          onPress={() => onAddClick(sectionObjectType)}
        >
        <Icon name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}, [onAddClick]);
```


### Function Definition
The function renderSectionHeader is defined to render headers for each section in a SectionList.

### useCallback Hook
The useCallback hook memoizes the function, ensuring it is only recreated if the dependencies change.

### Dependency Array
The array [onAddClick] ensures that renderSectionHeader is only recreated if onAddClick changes.