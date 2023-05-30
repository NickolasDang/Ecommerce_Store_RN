import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker'
import { TextInput } from 'react-native-paper'
import { getData, storeData } from '../../../app/asyncStorage'
import BaseButton from '../../../components/base/BaseButton'
import Colors from '../../../constants/Colors'
import { MY_PROFILE_AVATAR } from '../../../constants/Images'
import { MyProfileStackProps } from '../../../navigation/MyProfileStack'

type Props = StackScreenProps<MyProfileStackProps, 'MyProfile'>

const AVATAR_KEY = 'MyProfileAvatar'

const MyProfile = ({navigation}: Props) => {
  const [avatar, setAvatar] = useState(MY_PROFILE_AVATAR)
  const [name, setName] = useState('')

  const getProfileAvatar = async() => {
    const avatar = await getData(AVATAR_KEY)
    if (avatar !== null) {
      setAvatar(avatar)
    }
  }

  const pickNewProfilePicture = async() => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: true
    }
    const result = await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.errorMessage !== undefined) {
        console.log('ImagePicker Error: ', response.errorMessage);
      }
      else {
        if(response.assets !== undefined) {
          const uri =  response.assets[0].uri
          storeData(AVATAR_KEY, uri)
          getProfileAvatar()
        }
      }
    });
  }

  const logout = () => {
    navigation.navigate('LogoutDialog')
  }

  useEffect(() => {
    getProfileAvatar
  }, [])

  return (
    <SafeAreaView style={styles.container}> 
    <ScrollView showsVerticalScrollIndicator={false}>
      <TextInput
          style={{marginBottom: 30}}
          mode="outlined"
          label={'Full name'}
          activeOutlineColor={Colors.blue300}
          value={name}
          onChangeText={name => setName(name)}
        />

        <TouchableOpacity onPress={pickNewProfilePicture} style={{alignSelf: 'center'}}>
          {avatar === MY_PROFILE_AVATAR ?
            (<Image style={styles.avatar} source={avatar}/>) :
            (<Image style={styles.avatar} source={{uri:avatar}}/>)
          }
        </TouchableOpacity>

        <TextInput
          style={{marginBottom: 20}}
          mode="outlined"
          label={'Mobile Number'}
          activeOutlineColor={Colors.blue300}
          value={name}
          onChangeText={name => setName(name)}/>
        
        <TextInput
          style={{marginBottom: 20}}
          mode="outlined"
          label={'City'}
          activeOutlineColor={Colors.blue300}
          value={name}
          onChangeText={name => setName(name)}/>

        <TextInput
          style={{marginBottom: 20}}
          mode="outlined"
          label={'Locality, area or street'}
          activeOutlineColor={Colors.blue300}
          value={name}
          onChangeText={name => setName(name)}/>

        <TextInput
          style={{marginBottom: 50}}
          mode="outlined"
          label={'Flat no., Building name'}
          activeOutlineColor={Colors.blue300}
          value={name}
          onChangeText={name => setName(name)}/>

          <BaseButton text={'update'} style={{marginBottom: 20}}/>
          <BaseButton text={'logout'} style={{marginBottom: 30}} onPress={logout}/>

      </ScrollView>
    </SafeAreaView>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 120/2,
    marginBottom: 50
  }
})