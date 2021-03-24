import {observable, action, makeObservable, computed} from 'mobx';
import axios from 'axios';
import { Alert } from 'react-native';

export interface IPhoto {
  url?: string;
  type?: string;
  name?: string;
}

export interface IPhotoStore {
  photoList: Array<IPhoto>;
  isAvailable: boolean;

  addPhoto: (newUrl: IPhoto, index: number) => void;
  uploadPhoto: () => Promise<any>;
}

class PhotoStore implements IPhotoStore {
  @observable public photoList: Array<IPhoto> = [
    {url: ''},
    {url: ''},
    {url: ''},
    {url: ''},
    {url: ''},
  ];

  constructor() {
    makeObservable(this);
  }

  @computed
  get isAvailable() {
    return this.photoList.length != 0 && this.photoList.every(item => !!item.url)
  }

  @action
  public addPhoto = (newPhoto: IPhoto, index: number) => {
    this.photoList = Object.assign([],  this.photoList, {[index]: newPhoto});
  };

  @action
  public uploadPhoto = () => {
    const formData = new FormData();
    this.photoList.map(item => {
      formData.append("photos[]", {
        uri: item.url,
        type: item.type,
        name: item.name
      })
    })
    //Загрузка на абстрактный сервер
    return axios.post('test.test/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      Alert.alert('Загружено!')
      return res
    }).catch((err) => {
      Alert.alert('Ошибка!')
    })
  }

}

export default PhotoStore;
