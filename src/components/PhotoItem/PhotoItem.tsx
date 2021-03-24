import React, {FunctionComponent} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {IPhoto} from '../../store/PhotoStore';
import AddIcon from '../Icons/AddIcon';

interface IProps {
  onPress: () => void;
  photoUrl?: string;
  style?: ViewStyle
}

const PhotoItem: FunctionComponent<IProps> = ({onPress, photoUrl, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {photoUrl ? (
        <Image
          source={{uri: photoUrl}}
          resizeMode={'cover'}
          style={styles.image}
        />
      ) : (
        <AddIcon />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    marginTop: 5,
    backgroundColor: '#E8E8ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default PhotoItem;
