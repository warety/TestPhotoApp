import PhotoStore from './PhotoStore';

export function initStores() {
  return {
    photo: new PhotoStore(),
  }
}

let Stores = initStores();
export default Stores;
