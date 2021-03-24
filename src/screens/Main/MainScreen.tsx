import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import NavigationService from '../../services/NavigationService';
import {IPhoto, IPhotoStore} from '../../store/PhotoStore';
import Button from '../../components/Button';
import PhotoItem from '../../components/PhotoItem';
import BaseContainer from '../../components/BaseContainer';
import Routes from '../../navigation/routes';

interface IProps {
  photo: IPhotoStore;
  onPhotoPress: (photo: IPhoto) => any;
}

const MainScreen = inject('photo')(
  observer<React.FunctionComponent<IProps>>(props => {
    const {photoList, isAvailable, uploadPhoto} = props.photo;

    const onSelectedPhotoPress = (photo: IPhoto) => {
      NavigationService.navigate(Routes.Modal, {imageUrl: photo.url});
    };

    const onEmptyPhotoPress = (index: number) => {
      NavigationService.navigate(Routes.PhotoSelect, {
        onPress: (photo: IPhoto) => props.photo.addPhoto(photo, index),
      });
    };
    return (
      <BaseContainer style={styles.baseContainer}>
        <View style={styles.listContainer}>
          {photoList.map((item, index) =>
            item.url ? (
              <PhotoItem
                key={index}
                photoUrl={item.url}
                onPress={() => onSelectedPhotoPress(item)}
              />
            ) : (
              <PhotoItem
                key={index}
                onPress={() => {
                  onEmptyPhotoPress(index);
                }}
              />
            ),
          )}
        </View>
        <Button
          onPress={() => uploadPhoto()}
          title="Сохранить"
          disabled={!isAvailable}
        />
      </BaseContainer>
    );
  }),
);

const styles = StyleSheet.create({
  baseContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default MainScreen;
