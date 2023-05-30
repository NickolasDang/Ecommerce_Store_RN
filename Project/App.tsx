import codePush from "react-native-code-push";
import 'react-native-gesture-handler';
import AppStack from './src/navigation/AppStack';

const App = () => {

  return (
    <AppStack/>
  );
}

export default codePush(App);
