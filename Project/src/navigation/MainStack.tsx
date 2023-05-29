import 'react-native-gesture-handler';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { BACK_ARROW_ICON_IMG, MENU_ICON_IMG, MY_CART_ICON_WHITE_IMG } from '../constants/Images';
import ProductDetail from '../features/productDetail/ProductDetail';
import { Product } from '../features/products/data/Product';
import Main from '../features/products/screens/Main';
import Search from '../features/products/screens/Search';
import ModalStack, { ModalStackProps } from './ModalStack';

export type MainStackProps = {
    Main: undefined,
    Search: undefined,
    ProductDetail: {
        product: Product
    },
    ModalStack: NavigatorScreenParams<ModalStackProps>
}

const Stack = createStackNavigator<MainStackProps>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={({navigation}) => ({
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

        <Stack.Screen name='Main' component={Main} options={({navigation}) => ({
            title: 'Ecommerce Store',
            headerLeft: () => ( 
                <HeaderButton img={MENU_ICON_IMG} onPress={() => navigation.toggleDrawer()}/>
                )
        })}/>
        <Stack.Screen name='Search' component={Search} options={{title: 'Search'}}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        <Stack.Screen name='ModalStack' component={ModalStack} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default MainStack;
