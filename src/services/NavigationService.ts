import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';


export default class NavigationService {

  public static navigationRef = React.createRef<NavigationContainerRef>();

  public static isReady: boolean = false

  public static setIsReady(isReady: boolean) {
      NavigationService.isReady = isReady;
  }

  public static navigate(routeName: string, params?: any) {
    if (NavigationService.navigationRef.current && NavigationService.isReady) {
      NavigationService.navigationRef.current.navigate(routeName, params)
    }

  }

  public static push(routeName: string, params?: any) {}

  public static goBack(data: any = {}): any {
    if (NavigationService.navigationRef.current && NavigationService.isReady) {
      NavigationService.navigationRef.current.goBack()
    }
  }
}
