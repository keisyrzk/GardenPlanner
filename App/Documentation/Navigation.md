# Navigation Overview

## Stack Navigator
Uses '@react-navigation/native-stack' to manage navigation between screens in a stack format.
Screens are pushed and popped from the stack, allowing for a smooth navigation experience similar to a browser.

### NavigationContainer
Wraps the entire navigation stack.
Manages the navigation tree and state, linking the app's top-level navigator with the rest of the application.

### QueryClientProvider
Wraps the application to provide a React Query context, enabling data fetching and caching throughout the app.

### SafeAreaView
Ensures the content is rendered within the safe area boundaries of a device, preventing overlap with status bars and notches.

## Stack Screens

### Defining <Stack.Screen>
Each screen that can be navigated to must be defined within the Stack.Navigator.
Defines the component to be rendered for each screen and the screen's options (like headers and titles).

```TypeScript
<Stack.Screen
  name="Main"
  component={MainView}
  options={{
    title: 'Main',
    headerShown: false,
  }}
/>
```

### RootStackParamList
Type Definition
Defines the parameters each screen can accept.
Ensures type safety when navigating between screens.

```TypeScript
type RootStackParamList = {
  Main: undefined;
  GardenObjectDetails: {
    gardenObject: GardenObject;
  };
};
```

### Exported screen Props
Type definitions for the props passed to each screen.
Helps in accessing route parameters and navigation properties with type safety.

```TypeScript
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
```

## Summary

Stack.Navigator     -   Manages the navigation stack
<Stack.Screen>      -   Defines each navigable screen in the stack
RootStackParamList  -   Specifies parameters for type safety in navigation
Screen Props        -   Provides type-safe props for each screen

----------------------------------------------------------------------------------

# useNavigation Hook
Purpose
The useNavigation hook is used to get access to the navigation object, which allows you to navigate between different screens in your app.
Here, it is typed with MainProps['navigation'] to ensure type safety.

```TypeScript
const navigation = useNavigation<MainProps['navigation']>();
```

This hook call returns the navigation object typed with MainProps['navigation'].
Ensures that the navigation object conforms to the type defined for the Main screen's navigation prop.

----------
```TypeScript
const onSelectGardenObject = (gardenObject: GardenObject) => {
  navigation.navigate('GardenObjectDetails', {
    gardenObject,
  });
};
```

This function is an event handler that gets called when a garden object is selected. 
It navigates to the GardenObjectDetails screen and passes the selected garden object as a parameter.

const onSelectGardenObject = (gardenObject: GardenObject) => {...}:
This is a function that takes a gardenObject of type GardenObject as an argument.
navigation.navigate('GardenObjectDetails', {...}):
Calls the navigate method on the navigation object to go to the GardenObjectDetails screen.
Passes an object with the gardenObject property, which contains the selected garden object.
