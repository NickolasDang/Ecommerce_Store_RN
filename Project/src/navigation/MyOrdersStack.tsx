import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '../app/hooks';
import Colors from '../constants/Colors';
import MyOrdersLoginFirst from '../features/myOrders/screens/MyOrdersLoginFirst';
import HeaderButton from '../components/HeaderButton';
import { BACK_ARROW_ICON_IMG, MY_CART_ICON_WHITE_IMG } from '../constants/Images';
import MyOrders from '../features/myOrders/screens/MyOrders';

export type MyOrdersStackProps = {
    MyOrdersLoginFirst: undefined,
    MyOrders: undefined
}

const Stack = createStackNavigator<MyOrdersStackProps>();

const MyOrdersStack = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);
  return (
    <Stack.Navigator screenOptions={({navigation}) => ({
        title: 'My Orders',
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
      {isLogged ? (
        <>
        <Stack.Screen name='MyOrders' component={MyOrders}/>
        </>
      ) : (
        <Stack.Screen name="MyOrdersLoginFirst" component={MyOrdersLoginFirst} />
      )}
    </Stack.Navigator>
  );
};

export default MyOrdersStack;
