import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SectionList, Text, StyleSheet, TouchableOpacity, View, Modal, SafeAreaView } from 'react-native';
import colors from '../Resources/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { GardenObject } from '../Entities/GardenObject';
import { GardenObjectType } from '../Entities/GardenObjectType';
import { Plant } from '../Entities/Plant';
import { Decoration } from '../Entities/Decoration';
import { Architecture } from '../Entities/Architecture';
import { MainProps } from './AppNavigation';
import AddGardenObjectView from '../Views/AddGardenObjectView';

const GardenObjectsListView = ({
  plants,
  decorations,
  architecture
} : {
  plants: Plant[];
  decorations: Decoration[];
  architecture: Architecture[];
}) => {
  type GardenSection = {
    title: string;
    data: GardenObject[];
  };

  const navigation = useNavigation<MainProps['navigation']>();

  /**
   * Navigates to the GardenObjectDetails view when a garden object is selected.
   */
  const onSelectGardenObject = (gardenObject: GardenObject) => {
    navigation.navigate('GardenObjectDetails', {
      gardenObject,
    });
  };

  /**
   * State to manage the modal presentation.
   * - isModalPresented: boolean indicating if the modal is open.
   * - selectedSection: the type of garden object selected for the modal.
   */
  const [modalPresentationState, setModalPresentationState] = useState<{
    isModalPresented: boolean;
    selectedSection: GardenObjectType | null;
  }>({
    isModalPresented: false,
    selectedSection: null,
  });

  /**
   * State to manage the sections of garden objects.
   */
  const [sections, setSections] = useState<GardenSection[]>([
    {
      title: 'Plants',
      data: plants.map(plant => new Plant(plant.id, plant.type, plant.name, plant.maxHeight, plant.maxWidth))
    },
    {
      title: 'Decorations',
      data: decorations.map(decoration => new Decoration(decoration.id, decoration.type, decoration.name, decoration.width, decoration.height, decoration.depth))
    },
    {
      title: 'Architectures',
      data: architecture.map(architecture => new Architecture(architecture.id, architecture.type, architecture.name, architecture.width, architecture.height, architecture.depth))
    }
  ]);

  /**
   * Opens the modal to add a new garden object of the specified type.
   */
  const onAddClick = (gardenObjectType: GardenObjectType) => {
    setModalPresentationState({
      isModalPresented: true,
      selectedSection: gardenObjectType
    });
  };

  /**
   * Closes the modal.
   */
  const closeModal = () => {
    setModalPresentationState({
      isModalPresented: false,
      selectedSection: null,
    });
  };

  /**
   * Adds the new garden object to the appropriate section and closes the modal.
   */
  const onNewGardenObjectSave = (gardenObject: GardenObject) => {
    const updatedSections = sections.map(section => {
      if (section.title === getSectionTitle(gardenObject.getObjectType())) {
        return {
          ...section,
          data: [...section.data, gardenObject]
        };
      }
      return section;
    });

    console.log('Updated Sections:', updatedSections); // Log the updated sections before setting the state
    setSections(updatedSections);
    closeModal();
  };

  /**
   * Returns the section title corresponding to the garden object type.
   */
  const getSectionTitle = (gardenObjectType: GardenObjectType): string => {
    switch (gardenObjectType) {
      case GardenObjectType.Plant:
        return 'Plants';
      case GardenObjectType.Decoration:
        return 'Decorations';
      case GardenObjectType.Architecture:
        return 'Architectures';
      default:
        return '';
    }
  };

  /**
   * Renders an individual garden object item.
   */
  const renderItem = (item: GardenObject) => {
    return (
      <TouchableOpacity onPress={() => onSelectGardenObject(item)}>
        <Text style={styles.listItem}>{item.title()}</Text>
      </TouchableOpacity>
    )
  };

  /**
   * Renders the header for each section.
   */
  const renderSectionHeader = (title: string, gardenObjectType: GardenObjectType) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>{title}</Text>
        <TouchableOpacity
            style={styles.addButton}
            onPress={() => onAddClick(gardenObjectType)}
          >
            <Icon name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    )
  }

  /**
   * Renders a separator between items.
   */
  const itemSeparator = () => (
    <View style={styles.separator} />
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, _) => item.id.toString()}
        renderSectionHeader={({ section: { title, data } }) => {
          const sectionObjectType = data[0]?.getObjectType();
          return renderSectionHeader(title, sectionObjectType);
        }}
        renderItem={({ item }) => (
          <View style={styles.listItemContainer}>
            {renderItem(item)}
          </View>
        )}
        ItemSeparatorComponent={itemSeparator}
      />
      <Modal
        visible={modalPresentationState.isModalPresented}
        transparent={false}
        animationType='slide'
        onRequestClose={closeModal}
      >
        <SafeAreaView style={styles.contentContainer}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => closeModal()}
              >
                <Icon name="close" size={24} color="white" />
            </TouchableOpacity>
            <AddGardenObjectView
              gardenObjectType={modalPresentationState.selectedSection}
              onSave={onNewGardenObjectSave}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default GardenObjectsListView;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: colors.darkBackground
  },
  container: {
    flex: 1,
  },
  scrollViewContentContainer: {
    flex: 1,
    padding: 10
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.darkBackground,
    padding: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkGold,
    backgroundColor: colors.darkBackground,
    padding: 5
  },
  separator: {
    height: 1
  },
  listItemContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: colors.background
  },
  listItem: {
    color: colors.grayWhite
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.darkGold,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.darkGold,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBackground,
    paddingHorizontal: 16,
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: colors.darkGold
  },
});

/*
  Alternative approach - sample mocked data

  const [gardenObjects, setGardenObjects] = useState<GardenObject[]>([
    new Plant('p1', GardenObjectType.PlantType.Tree, 'Oak', 20, 10),
    new Decoration('d1', GardenObjectType.DecorationType.Flowerpot, 0.5, 0.5, 0.6),
    new Architecture('a1', GardenObjectType.ArchitectureType.Pergola, 3.0, 4.0, 2.5)
  ]);

  // Create main sections 
  const plantObjects = gardenObjects.filter((gardenObject): gardenObject is Plant => {
    return Object
            .values(GardenObjectType.PlantType)
            .includes(gardenObject.type as GardenObjectType.PlantType);
  });

  const decorationsObjects = gardenObjects.filter((gardenObject): gardenObject is Decoration => {
    return Object
            .values(GardenObjectType.DecorationType)
            .includes(gardenObject.type as GardenObjectType.DecorationType);
  });

  const architectureObjects = gardenObjects.filter((gardenObject): gardenObject is Architecture => {
    return Object
            .values(GardenObjectType.ArchitectureType)
            .includes(gardenObject.type as GardenObjectType.ArchitectureType);
  });
*/
