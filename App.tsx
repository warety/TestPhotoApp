/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {Provider} from 'mobx-react';
import Stores from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './src/services/NavigationService';
import RootStack from './src/navigation';

const App = () => {
  React.useEffect(() => {
    return () => {
      NavigationService.setIsReady(false);
    };
  }, []);

  return (
    <Provider {...Stores}>
      <NavigationContainer
        ref={NavigationService.navigationRef}
        onReady={() => {
          NavigationService.setIsReady(true);
        }}>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
