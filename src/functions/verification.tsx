import {Alert} from 'react-native';
import LocalAuthentication from 'rn-local-authentication';
import {saveSession} from './saveSession';

export const Verification = async () => {
  try {
    const response = await LocalAuthentication.authenticateAsync({
      reason: 'inicio de sesion',
      title: 'Verificacion Fracttal',
      cancelTitle: 'Cancelar',
      fallbackEnabled: true,
      fallbackToPinCodeAction: true,
    });
    if (response.error) {
      if (
        response.error === 'UserCancel' ||
        response.error === 'UserFallback'
      ) {
        Alert.alert('Error', 'Autenticacion cancelada');
      } else if (response.error === 'BiometryNotEnrolled') {
        Alert.alert('Error', 'Su dispositivo no cuenta con sensor biometrico');
      } else if (response.error === 'PasscodeNotSet') {
        Alert.alert(
          'Error',
          'Su dispositivo no tiene ningun metodo de autenticacion configurado',
        );
      }
      saveSession(false);
    } else if (response.success) {
      saveSession(true);
    }
  } catch (error: any) {
    Alert.alert(error);
    saveSession(false);
  }
};
