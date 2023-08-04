import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSession = async (value: boolean) => {
  await AsyncStorage.setItem('SessionLog', JSON.stringify(value));
};
