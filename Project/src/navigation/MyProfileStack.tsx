import { createStackNavigator } from '@react-navigation/stack';
import { BackHeaderButton } from '../components/headerButtons/BackHeaderButton';
import { MyCartHeaderButton } from '../components/headerButtons/MyCartHeaderButton';
import Colors from '../constants/Colors';
import LogoutDialog from '../features/myProfile/screens/LogoutDialog';
import MyProfile from '../features/myProfile/screens/MyProfile';

export type MyProfileStackProps = {
  MyProfile: undefined;
  LogoutDialog: undefined;
};

const Stack = createStackNavigator<MyProfileStackProps>();

const MyProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        title: 'My Profile',
        headerStyle: {
          backgroundColor: Colors.blue300,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: Colors.white,
        },
        headerTintColor: Colors.white,
        headerLeft: () => (BackHeaderButton(navigation)),
        headerRight: () => (MyCartHeaderButton(navigation)),
      })}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen
        name="LogoutDialog"
        component={LogoutDialog}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default MyProfileStack;
