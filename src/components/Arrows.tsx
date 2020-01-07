import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';

import arrow from '../assets/arrow.png';
import { constants } from '../helpers';
import { ArrowsComponentProps } from '../componentTypes';

const Arrows = ({
  onArrowPress,
  listWidth,
  leftArrowDisabled,
  rightArrowDisabled,
}: ArrowsComponentProps) => (
  <View style={styles.container}>
    <TouchableOpacity
      disabled={leftArrowDisabled}
      onPress={() => onArrowPress('left')}
      style={[styles.leftArrow, leftArrowDisabled && styles.disabledArrow]}
    >
      <Image source={arrow} style={styles.arrowIcon} />
    </TouchableOpacity>

    <TouchableOpacity
      disabled={rightArrowDisabled}
      onPress={() => onArrowPress('right')}
      style={[
        styles.rightArrow,
        { left: listWidth - constants.touchableSize * 1.6 },
        rightArrowDisabled && styles.disabledArrow,
      ]}
    >
      <Image source={arrow} style={styles.arrowIcon} />
    </TouchableOpacity>
  </View>
);

export default React.memo<ArrowsComponentProps>(Arrows);

const styles = StyleSheet.create({
  arrowIcon: {
    height: constants.touchableSize * 0.8,
    width: constants.touchableSize * 0.8,
  },
  container: {
    flexDirection: 'row',
    position: 'absolute',
  },
  disabledArrow: {
    opacity: 0.5,
  },
  leftArrow: {
    left: constants.touchableSize * 0.8,
    position: 'absolute',
    zIndex: 1,
  },
  rightArrow: {
    position: 'absolute',
    transform: [
      {
        rotate: '180deg',
      },
    ],
    zIndex: 1,
  },
});
