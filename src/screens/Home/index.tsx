import React, {useEffect} from 'react';
import {
  Alert,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LocalAuthentication from 'rn-local-authentication';
import styles from './styles';
import colors from '../../themes/colors';
import FingerprintImage from '../../assets/fingerprint.svg';
import FaceIdImage from '../../assets/faceID.svg';

export const Home = () => {
  //   useEffect(() => {
  //     Verification();
  //   }, []);

  const Verification = async () => {
    try {
      const response = await LocalAuthentication.authenticateAsync({
        reason: 'inicio de sesion',
        title: 'Verificacion Fracttal',
        cancelTitle: 'Cancelar',
        fallbackEnabled: true,
        fallbackToPinCodeAction: true,
      });
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
      } else if (response.success) {
        Alert.alert('Usuario autenticado');
      }
    } catch (error: any) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <Text style={styles.loginText}>Login</Text>
      {Platform.OS === 'android' ? (
        <>
          <Text style={styles.textSubtitle}>
            Autenticar con tu huella dactilar
          </Text>
          <FingerprintImage height={120} />
        </>
      ) : (
        <>
          <Text style={styles.textSubtitle}>Autenticar con Face ID</Text>
          <FaceIdImage height={120} />
        </>
      )}
      <TouchableOpacity style={styles.buttonAuth} onPress={Verification}>
        <Text style={styles.textButton}>Autenticar</Text>
      </TouchableOpacity>
    </View>
  );
};
