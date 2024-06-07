import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { GardenObject } from '../Entities/GardenObject';
import { GardenObjectType } from '../Entities/GardenObjectType';
import { Plant } from '../Entities/Plant'; 
import { Decoration } from '../Entities/Decoration';
import { Architecture } from '../Entities/Architecture';
import colors from '../Resources/colors';
import uuid from 'react-native-uuid'; // Generating UUID

/**
 * AddGardenObjectView component allows users to add a new garden object.
 * @param {Object} props - The properties passed to the component.
 * @param {GardenObjectType} props.gardenObjectType - The type of garden object being added.
 * @param {function} props.onSave - Function to call when the garden object is saved.
 */
const AddGardenObjectView = ({
  gardenObjectType,
  onSave,
}: {
  gardenObjectType: GardenObjectType;
  onSave: (gardenObject: GardenObject) => void;
}) => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [maxWidth, setMaxWidth] = useState('');
  const [width, setWidth] = useState('');
  const [depth, setDepth] = useState('');
  const [height, setHeight] = useState('');
  const [subtype, setSubtype] = useState<string>(''); // State for selected subtype
  const [showSubtypeList, setShowSubtypeList] = useState(false); // State to show/hide subtype list

  /**
   * Handles the save button press, creating a new garden object and calling onSave.
   */
  const handleSave = () => {
    let newGardenObject: GardenObject;
    const uniqueId: string = uuid.v4() as string; // Generate a unique ID
    
    // Create a new garden object based on the selected type
    switch (gardenObjectType) {
      case GardenObjectType.Plant:
        newGardenObject = new Plant(
          uniqueId,
          subtype as GardenObjectType.PlantType,
          name,
          parseFloat(maxHeight),
          parseFloat(maxWidth)
        );
        break;

      case GardenObjectType.Decoration:
        newGardenObject = new Decoration(
          uniqueId,
          subtype as GardenObjectType.DecorationType,
          name,
          parseFloat(width),
          parseFloat(depth),
          parseFloat(height)
        );
        break;

      case GardenObjectType.Architecture:
        newGardenObject = new Architecture(
          uniqueId,
          subtype as GardenObjectType.ArchitectureType,
          name,
          parseFloat(width),
          parseFloat(depth),
          parseFloat(height)
        );
        break;

      default:
        return;
    }

    onSave(newGardenObject);
  };

  /**
   * Renders the list items for subtype selection.
   * @param {string[]} items - The list of subtypes to render.
   * @returns {JSX.Element[]} A list of TouchableOpacity elements for each subtype.
   */
  const renderListItems = (items: string[]) => {
    return items.map((item) => (
      <TouchableOpacity
        key={item}
        onPress={() => {
          setSubtype(item);
          setShowSubtypeList(false);
        }}
        style={styles.listItem}
      >
        <Text style={styles.listItemText}>{item}</Text>
      </TouchableOpacity>
    ));
  };

  /**
   * Renders the input fields based on the selected garden object type.
   * @returns {JSX.Element} A view containing the input fields for the garden object.
   */
  const objectView = () => {
    let subtypes;
    switch (gardenObjectType) {
      case GardenObjectType.Plant:
        subtypes = Object.values(GardenObjectType.PlantType);
        break;
      case GardenObjectType.Decoration:
        subtypes = Object.values(GardenObjectType.DecorationType);
        break;
      case GardenObjectType.Architecture:
        subtypes = Object.values(GardenObjectType.ArchitectureType);
        break;
      default:
        subtypes = [];
    }

    return (
      <View>
        <Text style={styles.title}>Type</Text>
        <TouchableOpacity onPress={() => setShowSubtypeList(!showSubtypeList)} style={styles.dropdown}>
          <Text style={styles.dropdownText}>{subtype || "Select Type"}</Text>
        </TouchableOpacity>
        {showSubtypeList && <View style={styles.listContainer}>{renderListItems(subtypes)}</View>}

        <Text style={styles.title}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        {gardenObjectType === GardenObjectType.Plant && (
          <>
            <Text style={styles.title}>Maximum Height</Text>
            <TextInput
              style={styles.input}
              value={maxHeight}
              onChangeText={setMaxHeight}
              keyboardType="numeric"
            />

            <Text style={styles.title}>Maximum Width</Text>
            <TextInput
              style={styles.input}
              value={maxWidth}
              onChangeText={setMaxWidth}
              keyboardType="numeric"
            />
          </>
        )}

        {gardenObjectType !== GardenObjectType.Plant && (
          <>
            <Text style={styles.title}>Width</Text>
            <TextInput
              style={styles.input}
              value={width}
              onChangeText={setWidth}
              keyboardType="numeric"
            />

            <Text style={styles.title}>Depth</Text>
            <TextInput
              style={styles.input}
              value={depth}
              onChangeText={setDepth}
              keyboardType="numeric"
            />

            <Text style={styles.title}>Height</Text>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
            />
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.contentContainer}>
      {objectView()}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddGardenObjectView;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    width: '100%'
  },
  innerContainer: {
    flex: 1,
  },
  title: {
    color: colors.darkGold,
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  input: {
    height: 40,
    borderColor: colors.grayWhite,
    borderWidth: 1,
    marginBottom: 20,
    color: colors.grayWhite,
    paddingLeft: 8
  },
  saveButton: {
    backgroundColor: colors.darkGold,
    padding: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 18,
  },
  listContainer: {
    marginBottom: 20,
  },
  listItem: {
    paddingVertical: 10,
    paddingLeft: 20,
    height: 40
  },
  listItemText: {
    color: colors.white,
    fontSize: 18,
  },
  dropdown: {
    height: 40,
    borderColor: colors.grayWhite,
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 20,
    paddingLeft: 10,
  },
  dropdownText: {
    color: colors.grayWhite,
  },
});
