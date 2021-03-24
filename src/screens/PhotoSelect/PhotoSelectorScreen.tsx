import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import CameraRoll, {PhotoIdentifier} from '@react-native-community/cameraroll';
import NavigationService from '../../services/NavigationService';
import BaseContainer from '../../components/BaseContainer';
import PhotoItem from '../../components/PhotoItem';

interface IProps {
  route: any;
}

const PhotoSelectorScreen: React.FunctionComponent<IProps> = ({route}) => {
  const {onPress} = route.params;
  const [photos, setPhotos] = useState<PhotoIdentifier[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [endCursor, setEndCursor] = useState<any>(undefined);

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 24,
      assetType: 'Photos',
      after: endCursor,
      groupTypes: 'All',
    }).then(response => {
      setPhotos([...photos, ...response.edges]);
      setHasNextPage(response.page_info.has_next_page);
      setEndCursor(response.page_info.end_cursor);
    });
  };

  useEffect(() => {
    getPhotos()
  }, []);

  return (
    <BaseContainer style={{alignItems: 'center'}}>
        <FlatList
        numColumns={5}
        keyExtractor={item => item.node.image.uri}
        data={photos}
        renderItem={({item}: {item: PhotoIdentifier}) => {
          return (
            <PhotoItem
              photoUrl={item.node.image.uri}
              style={styles.photo}
              onPress={() => {
                onPress({
                  url: item.node.image.uri,
                  type: item.node.type,
                  name: item.node.image.filename,
                });
                NavigationService.goBack();
              }}
            />
          );
        }}
        onEndReached={() => (hasNextPage ? getPhotos() : {})}
      />
      
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  photo: {
    marginBottom: 6,
    marginHorizontal: 6,
  },
});

export default PhotoSelectorScreen;
