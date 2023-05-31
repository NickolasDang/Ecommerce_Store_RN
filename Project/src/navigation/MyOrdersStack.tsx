import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '../app/hooks';
import { BackHeaderButton } from '../components/headerButtons/BackHeaderButton';
import { MyCartHeaderButton } from '../components/headerButtons/MyCartHeaderButton';
import Colors from '../constants/Colors';
import MyOrders from '../features/myOrders/screens/MyOrders';
import MyOrdersLoginFirst from '../features/myOrders/screens/MyOrdersLoginFirst';

export type MyOrdersStackProps = {
  MyOrdersLoginFirst: undefined;
  MyOrders: undefined;
};

const Stack = createStackNavigator<MyOrdersStackProps>();

const MyOrdersStack = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        title: 'My Orders',
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
      {isLogged ? (
        <>
          <Stack.Screen name="MyOrders" component={MyOrders} />
        </>
      ) : (
        <Stack.Screen
          name="MyOrdersLoginFirst"
          component={MyOrdersLoginFirst}
        />
      )}
    </Stack.Navigator>
  );
};

export default MyOrdersStack;
