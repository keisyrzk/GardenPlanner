import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flexGrow: 1, // allow the content to grow within the ScrollView
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 20,
    left: 50,
    right: 50,
    backgroundColor: '#C154C1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  }
});

export default styles;
