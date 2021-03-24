import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ImageViewer from '../screens/ImageViewer';
import PhotoSelectorScreen from '../screens/PhotoSelect';
import MainScreen from '../screens/Main';
import Routes from './routes';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={Routes.Main} component={MainScreen} />
      <MainStack.Screen name={Routes.PhotoSelect} component={PhotoSelectorScreen} />
    </MainStack.Navigator>
  );
};

const RootStackScreens = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreens}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name={Routes.Modal}
        component={ImageViewer}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreens;
