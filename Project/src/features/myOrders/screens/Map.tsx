import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import {ILocation} from '../data/Ilocation';
import {requestLocationPermission} from '../../../app/permissions';

const Map = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState<
    boolean | undefined
  >();
  const [location, setLocation] = useState<ILocation | undefined>();

  const checkLocationPermission = async () => {
    let granted = await requestLocationPermission();
    console.log('MAP LOG:', `permission granted: ${granted}`);
    setHasLocationPermission(granted);
  };

  const getUserLocation = async () => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
          console.log('MAP LOG,', `${latitude}, ${longitude}`);
        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    } else {
      //navigate back
    }
  };

  useEffect(() => {
    checkLocationPermission();
    getUserLocation();
  });

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      ) : null}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
