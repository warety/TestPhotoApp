import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  Text,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

interface IProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

const Button: FunctionComponent<IProps> = ({
  onPress,
  title,
  disabled,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, {...style}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: '#8E54E9',
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: 'white',
  },
});

export default Button;
