import { createStackNavigator } from '@react-navigation/stack';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { BACK_ARROW_ICON_IMG, MY_CART_ICON_WHITE_IMG } from '../constants/Images';
import LogoutDialog from '../features/myProfile/screens/LogoutDialog';
import MyProfile from '../features/myProfile/screens/MyProfile';

export type MyProfileStackProps = {
    MyProfile: undefined,
    LogoutDialog: undefined
}

const Stack = createStackNavigator<MyProfileStackProps>();

const MyProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={({navigation}) => ({
        title: 'My Profile',
        headerStyle: {
          backgroundColor: Colors.blue300
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: Colors.white
        },
        headerTintColor: Colors.white,
        headerLeft: () => ( 
        <HeaderButton img={BACK_ARROW_ICON_IMG} onPress={() => navigation.goBack()}/>
        ),
        headerRight: () => (
          <HeaderButton img={MY_CART_ICON_WHITE_IMG} onPress={() => navigation.navigate('MyCartStack', {screen: 'MyCartEmpty'})}/>
        )
    })}>

        <Stack.Screen name='MyProfile' component={MyProfile}/>
        <Stack.Screen name="LogoutDialog" component={LogoutDialog} options={{presentation: 'modal'}}/>
    </Stack.Navigator>
  );
};

export default MyProfileStack;
