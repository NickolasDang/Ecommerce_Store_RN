import {createStackNavigator} from '@react-navigation/stack';
import { useAppSelector } from '../app/hooks';
import MyCartEmpty from '../features/myCart/screens/MyCartEmpty';
import MyCart from '../features/myCart/screens/MyCart';
import MyCartLoginFirst from '../features/myCart/screens/MyCartLoginFirst';
import MyCartConfirmation from '../features/myCart/screens/MyCartConfirmation';
import { Product } from '../features/products/components/PrdoutcCard';
import Colors from '../constants/Colors';

export type MyCartStackProps = {
    MyCartEmpty: undefined,
    MyCartLoginFirst: undefined,
    MyCartConfirmation: undefined,
    MyCart : {
        product: Product
    }
}

const Stack = createStackNavigator<MyCartStackProps>();

const MyCartStack = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);
  return (
    <Stack.Navigator screenOptions={{
        title: 'My Cart',
        headerStyle: {
          backgroundColor: Colors.blue300
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: Colors.white
        },
        headerTintColor: Colors.white
    }}>
      {isLogged ? (
        <>
          <Stack.Screen name="MyCartEmpty" component={MyCartEmpty} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name='MyCartConfirmation' component={MyCartConfirmation}/>
        </>
      ) : (
        <Stack.Screen name="MyCartLoginFirst" component={MyCartLoginFirst} />
      )}
    </Stack.Navigator>
  );
};

export default MyCartStack;
