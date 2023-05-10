import {createStackNavigator} from '@react-navigation/stack';
import { useAppSelector } from '../app/hooks';
import MyCartEmpty from '../features/myCart/screens/MyCartEmpty';
import MyCart from '../features/myCart/screens/MyCart';
import MyCartLoginFirst from '../features/myCart/screens/MyCartLoginFirst';
import MyCartConfirmation from '../features/myCart/screens/MyCartConfirmation';
import Colors from '../constants/Colors';
import { Product } from '../features/products/data/Product';
import HeaderButton from '../components/HeaderButton';
import { BACK_ARROW_ICON_IMG } from '../constants/Images';

export type MyCartStackProps = {
    MyCartEmpty: undefined,
    MyCartLoginFirst: undefined,
    MyCartConfirmation: undefined,
    MyCart : undefined
}

const Stack = createStackNavigator<MyCartStackProps>();

const MyCartStack = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);
  return (
    <Stack.Navigator screenOptions={({navigation}) => ({
        title: 'My Cart',
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
    })}>
      {isLogged ? (
        <>
          <Stack.Screen name="MyCartEmpty" component={MyCartEmpty} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name='MyCartConfirmation' component={MyCartConfirmation} options={{headerShown: false}}/>
        </>
      ) : (
        <Stack.Screen name="MyCartLoginFirst" component={MyCartLoginFirst} />
      )}
    </Stack.Navigator>
  );
};

export default MyCartStack;
