import {Alert, BackHandler} from 'react-native';

export const backAction = () => {
  Alert.alert('Espere!', 'Esta Seguro que quiere Salir?', [
    {
      text: 'Cancelar',
      onPress: () => null,
      style: 'cancel',
    },
    {text: 'Si', onPress: () => exit()},
  ]);

  const exit = () => {
    BackHandler.exitApp();
  };

  return true;
};
