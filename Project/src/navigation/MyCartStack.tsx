import { createStackNavigator } from '@react-navigation/stack';
import { useAppSelector } from '../app/hooks';
import { BackHeaderButton } from '../components/headerButtons/BackHeaderButton';
import Colors from '../constants/Colors';
import MyCart from '../features/myCart/screens/MyCart';
import MyCartConfirmation from '../features/myCart/screens/MyCartConfirmation';
import MyCartEmpty from '../features/myCart/screens/MyCartEmpty';
import MyCartLoginFirst from '../features/myCart/screens/MyCartLoginFirst';

export type MyCartStackProps = {
  MyCartEmpty: undefined;
  MyCartLoginFirst: undefined;
  MyCartConfirmation: undefined;
  MyCart: undefined;
};

const Stack = createStackNavigator<MyCartStackProps>();

const MyCartStack = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);
  const isCartEmpty = useAppSelector(state => state.cart.cart.cartItems.length === 0);

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        title: 'My Cart',
        headerStyle: {
          backgroundColor: Colors.blue300,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: Colors.white,
        },
        headerTintColor: Colors.white,
        headerLeft: () => (BackHeaderButton(navigation)),
      })}>
      {isLogged ? 
        isCartEmpty ? (
          <Stack.Screen name="MyCartEmpty" component={MyCartEmpty} />
        ) : (
          <>
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen
            name="MyCartConfirmation"
            component={MyCartConfirmation}
            options={{headerShown: false}}
          />
          </>
        )
       : (
        <Stack.Screen name="MyCartLoginFirst" component={MyCartLoginFirst} />
      )}
    </Stack.Navigator>
  );
};

export default MyCartStack;
