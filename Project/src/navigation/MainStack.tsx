import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { BackHeaderButton } from '../components/headerButtons/BackHeaderButton';
import { MenuHeaderButton } from '../components/headerButtons/MenuHeaderButton';
import { MyCartHeaderButton } from '../components/headerButtons/MyCartHeaderButton';
import Colors from '../constants/Colors';
import ProductDetail from '../features/productDetail/ProductDetail';
import { Product } from '../features/products/data/Product';
import Main from '../features/products/screens/Main';
import Search from '../features/products/screens/Search';
import ModalStack, { ModalStackProps } from './ModalStack';

export type MainStackProps = {
  Main: undefined;
  Search: undefined;
  ProductDetail: {
    product: Product;
  };
  ModalStack: NavigatorScreenParams<ModalStackProps>;
};

const Stack = createStackNavigator<MainStackProps>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
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
      <Stack.Screen
        name="Main"
        component={Main}
        options={({navigation}) => ({
          title: 'Ecommerce Store',
          headerLeft: () => (MenuHeaderButton(navigation)),
        })}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{title: 'Search'}}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen
        name="ModalStack"
        component={ModalStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
