import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import colors from '../../themes/colors';
import FingerprintImage from '../../assets/fingerprint.svg';
import FaceIdImage from '../../assets/faceID.svg';
import {Verification} from '../../functions/verification';
import {backAction} from '../../functions/backHandler';
import {sessionVerify} from '../../functions/sessionVerify';
import {ImageView} from '../../components/imageView';
import {CheckPermissions} from '../../functions/checkPermission';

export const Home = () => {
  const [sessionCheck, setSessionCheck] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect((): (() => void) => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return (): void => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  useEffect(() => {
    CheckPermissions();
    checkSession();
  }, []);

  const checkSession = async () => {
    const session = await sessionVerify();
    if (session) {
      setSessionCheck(true);
    } else {
      setSessionCheck(false);
    }
    setisLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      {sessionCheck && !isLoading ? (
        <ImageView setSessionCheck={setSessionCheck} />
      ) : !isLoading ? (
        <>
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
          <TouchableOpacity
            style={styles.buttonAuth}
            onPress={async () => {
              await Verification();
              await checkSession();
            }}>
            <Text style={styles.textButton}>Autenticar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <ActivityIndicator size={40} />
      )}
    </SafeAreaView>
  );
};
