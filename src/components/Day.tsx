import React, { useCallback } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { DayComponentProps } from '../componentTypes';
import { constants } from '../helpers';

const Day = ({
  backgroundColor = 'turquoise',
  color = 'black',
  day,
  dayString,
  endingDay,
  extraDay,
  inSeries,
  month,
  onPress,
  selected,
  startingDay,
  theme,
  today,
  year,
}: DayComponentProps) => {
  const handleDayPress = useCallback(() => {
    onPress?.({ day, month, year, dayString });
  }, [day, dayString, month, onPress, year]);

  if (!day) {
    return (
      <View style={styles.container}>
        <View style={styles.dayContainer}>
          <Text style={styles.dayText} />
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      accessibilityLabel={day}
      accessibilityRole="button"
      accessible
      activeOpacity={0.4}
      onPress={handleDayPress}
      style={styles.container}
    >
      <View
        style={[
          styles.dayContainer,
          inSeries && styles.inSeriesRadius,
          startingDay && styles.startingRadius,
          endingDay && styles.endingRadius,

          theme?.container,
          today && theme?.todayContainer,
          selected && (theme?.selectedContainer || { backgroundColor }),
          extraDay && theme?.extraDayContainer,
        ]}
      >
        <Text
          style={[
            styles.dayText,
            { color },
            today && (theme?.todayText || styles.todayText),
            extraDay && (theme?.extraDayText || styles.extraDayText),
            selected && theme?.selectedText,
            theme?.text,
          ]}
        >
          {day}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const areEqual = (
  {
    selected,
    day,
    month,
    year,
    dayString,
    color,
    backgroundColor,
    inSeries,
    startingDay,
    endingDay,
  }: DayComponentProps,
  nextProps: DayComponentProps
): boolean => {
  return (
    selected === nextProps.selected &&
    inSeries === nextProps.inSeries &&
    startingDay === nextProps.startingDay &&
    endingDay === nextProps.endingDay &&
    backgroundColor === nextProps.backgroundColor &&
    color === nextProps.color &&
    day === nextProps.day &&
    dayString === nextProps.dayString &&
    month === nextProps.month &&
    year === nextProps.year
  );
};

export default React.memo<DayComponentProps>(Day, areEqual);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: constants.touchableSize,
    justifyContent: 'center',
    maxWidth: width / 7,
  },
  dayContainer: {
    borderBottomLeftRadius: constants.touchableSize / 2,
    borderBottomRightRadius: constants.touchableSize / 2,
    borderTopLeftRadius: constants.touchableSize / 2,
    borderTopRightRadius: constants.touchableSize / 2,
    marginHorizontal: 5,
    padding: width / 45,
  },
  dayText: {
    fontSize: 16,
    textAlign: 'center',
    width: 20,
  },
  endingRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: constants.touchableSize / 2,
    borderTopLeftRadius: 0,
    borderTopRightRadius: constants.touchableSize / 2,
  },
  extraDayText: {
    color: 'lightgrey',
  },
  inSeriesRadius: {
    alignItems: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    justifyContent: 'center',
    marginHorizontal: 0,
    width: width / 7,
  },
  startingRadius: {
    borderBottomLeftRadius: constants.touchableSize / 2,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: constants.touchableSize / 2,
    borderTopRightRadius: 0,
  },
  todayText: {
    color: 'dodgerblue',
    fontWeight: '700',
  },
});
