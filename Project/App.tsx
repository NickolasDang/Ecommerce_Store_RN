import 'react-native-gesture-handler';
import codePush from "react-native-code-push";
import AppStack from './src/navigation/AppStack';
import MyCart from './src/features/myCart/screens/MyCart';
import Main from './src/features/products/screens/Main';
import Map from './src/features/myOrders/screens/Map';

const App = () => {

  return (
    <AppStack/>
  );
}

export default codePush(App);
