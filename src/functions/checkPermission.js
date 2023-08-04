import {Platform} from 'react-native';
import {
  PERMISSIONS,
  request,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';

export const CheckPermissions = () => {
  let permissionsiOS = [PERMISSIONS.IOS.PHOTO_LIBRARY, PERMISSIONS.IOS.CAMERA];

  if (Platform.OS === 'ios') {
    requestMultiple(permissionsiOS).then(statuses => {
      permissionsiOS.map(permission => {
        if (statuses[permission] !== RESULTS.GRANTED) {
          request(statuses[permission]).then(result => {
            console.log(result);
          });
        }
      });
    });
  }
};
