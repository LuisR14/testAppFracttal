import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {saveSession} from '../../functions/saveSession';
import FastImage from 'react-native-fast-image';
import imageHolder from '../../assets/imagePlaceholder.png';
import selectImage from '../../functions/selectImage';
import ImageVisor from 'react-native-image-viewing';
import ImageChange from '../../assets/imageChange.svg';

export const ImageView = ({setSessionCheck}: any) => {
  const [image, setImage] = useState(imageHolder);
  const [visible, setvisible] = useState(false);
  const [Loading, setLoading] = useState(false);

  const closeSession = () => {
    Alert.alert('Aviso', '¿Desea cerrar session?', [
      {
        text: 'Si',
        onPress: () => {
          saveSession(false);
          setSessionCheck(false);
        },
      },
      {
        text: 'Cancelar',
      },
    ]);
  };

  const checkImages = async () => {
    setLoading(true);
    const img: any = await selectImage();
    if (img) {
      setImage(img);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setvisible(true)}
        style={styles.imageContainer}>
        <FastImage source={image} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      {!Loading ? (
        <>
          <TouchableOpacity onPress={checkImages}>
            <ImageChange height={40} />
          </TouchableOpacity>
          <Text style={styles.textSubtitle}>Toque para cambiar imagen</Text>
        </>
      ) : (
        <>
          <ActivityIndicator size={40} />
          <Text style={styles.textSubtitle}>Cargando...</Text>
        </>
      )}

      <ImageVisor
        images={[image]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setvisible(false)}
      />
      <TouchableOpacity style={styles.buttonAuth} onPress={closeSession}>
        <Text style={styles.textButton}>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};
