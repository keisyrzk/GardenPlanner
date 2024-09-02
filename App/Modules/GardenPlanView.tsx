import React, { useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Button } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const SQUARE_SIZE = 20;
const GRID_WIDTH = 30;
const GRID_HEIGHT = 50;

const GardenPlanView = ({
      } : {
      }) => {
    // const scale = useSharedValue(1);

//   const onPinchEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
//     useNativeDriver: true,
//   });

//   const onHandlerStateChange = (event) => {
//     if (event.nativeEvent.oldState === State.ACTIVE) {
//       scale.value = withTiming(1);
//     }
//   };

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ scale: scale.value }],
//     };
//   });

//   const zoomIn = () => {
//     scale.value = withTiming(scale.value * 1.1);
//   };

//   const zoomOut = () => {
//     scale.value = withTiming(scale.value / 1.1);
//   };

      return (
        <Text>Hello</Text>
    // <View style={styles.container}>
    //   <PinchGestureHandler
    //     onGestureEvent={onPinchEvent}
    //     onHandlerStateChange={onHandlerStateChange}
    //   >
    //     <Animated.View style={[styles.gridContainer, animatedStyle]}>
    //       <Svg height={GRID_HEIGHT * SQUARE_SIZE} width={GRID_WIDTH * SQUARE_SIZE}>
    //         {Array.from(Array(GRID_HEIGHT).keys()).map((i) =>
    //           Array.from(Array(GRID_WIDTH).keys()).map((j) => (
    //             <Rect
    //               key={`${i}-${j}`}
    //               x={j * SQUARE_SIZE}
    //               y={i * SQUARE_SIZE}
    //               width={SQUARE_SIZE}
    //               height={SQUARE_SIZE}
    //               stroke="black"
    //               fill="white"
    //             />
    //           ))
    //         )}
    //       </Svg>
    //     </Animated.View>
    //   </PinchGestureHandler>
    //   <View style={styles.buttonContainer}>
    //     <Button title="+" onPress={zoomIn} />
    //     <Button title="-" onPress={zoomOut} />
    //   </View>
    // </View>
  );
};

export default GardenPlanView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    gridContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });