import React, {FunctionComponent} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import NavigationService from '../../services/NavigationService';

interface IProps {
  route: any;
}

const PhotoViewer: FunctionComponent<IProps> = props => {
  const {imageUrl} = props.route.params;

  return (
    <View style={styles.container}>
      <ImageViewer
        style={styles.imageContainer}
        imageUrls={[{url: imageUrl}]}
        pageAnimateTime={200}
        loadingRender={() => (
          <ActivityIndicator
            size="large"
            color={'#FFFFFF'}
            style={styles.activiIndicator}
          />
        )}
        onSwipeDown={() => NavigationService.goBack()}
        enableSwipeDown={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
  },
  activiIndicator: {
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    transform: [{scaleX: 2}, {scaleY: 2}],
  },
});

export default PhotoViewer;
