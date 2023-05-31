import {Platform, PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).catch(err => {
      console.warn(err);
    });

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
};
