import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert, Platform} from 'react-native';

export default () => {
  return new Promise(resolve => {
    const onGetImage = (response: any) => {
      if (response && response.assets && response.assets.length > 0) {
        const {path, type, fileName, uri} = response.assets[0];
        if (Platform.OS === 'ios') {
          resolve({
            path: uri.replace('file://', ''),
            type,
            fileName: uri.split('/')[uri.split('/').length - 1],
            uri,
          });
        } else {
          resolve({path, type, fileName, uri});
        }
      } else {
        resolve(null);
      }
    };

    const fromGalery = () => {
      launchImageLibrary(
        {
          mediaType: 'photo',
          quality: 1,
        },
        onGetImage,
      );
    };

    const fromCamera = async () => {
      const res = await launchCamera(
        {
          mediaType: 'photo',
          quality: 1,
        },
        onGetImage,
      );
      if (res.errorCode) {
        Alert.alert(
          'Error',
          'Debe aceptar los permisos de camara para acceder a esta funcionalidad',
        );
      }
    };

    Alert.alert(
      'Seleccione una opcion',
      '',
      [
        {
          text: 'Galería',
          onPress: fromGalery,
        },
        {
          text: 'Cámara',
          onPress: fromCamera,
        },
      ],
      {cancelable: true, onDismiss: () => resolve(null)},
    );
  });
};
