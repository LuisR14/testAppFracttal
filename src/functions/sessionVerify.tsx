import AsyncStorage from '@react-native-async-storage/async-storage';

export const sessionVerify = async () => {
  const response = await AsyncStorage.getItem('SessionLog');
  if (JSON.parse(response!!)) {
    return true;
  } else {
    return false;
  }
};
