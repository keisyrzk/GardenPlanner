# `memo`

## Purpose
The `memo` higher-order component is used to optimize functional components by memoizing the result. This prevents unnecessary re-renders when the component's props have not changed.

## Example Usage

```TypeScript
import React, { memo } from 'react';

// Pure component wrapped with memo
const SectionListItem = memo(({ item, onSelectGardenObject }: { item: GardenObject, onSelectGardenObject: (item: GardenObject) => void }) => {
  return (
    <View style={styles.listItemContainer}>
      <TouchableOpacity onPress={() => onSelectGardenObject(item)}>
        <Text style={styles.listItem}>{item.title()}</Text>
      </TouchableOpacity>
    </View>
  );
});
```

### Pure Component
A component that renders the same output given the same props.

### memo
The memo function wraps the SectionListItem component, ensuring it only re-renders when its props change.