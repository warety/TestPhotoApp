import React, {FunctionComponent} from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';

interface IProps {
  style?: ViewStyle;
}

const BaseContainer: FunctionComponent<IProps> = ({style, children}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

export default BaseContainer;
