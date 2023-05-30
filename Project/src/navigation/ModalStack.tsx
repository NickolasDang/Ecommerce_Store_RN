import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import SelectColorDialog from '../features/productDetail/components/dialogs/SelectColorDialog';
import ProductAddedDialog from '../features/productDetail/components/dialogs/ProductAddedDialog';
import LoginDialog from '../features/productDetail/components/dialogs/LoginDialog';
import { useAppSelector } from '../app/hooks';

export type ModalStackProps = {
    SelectColorDialog: undefined,
    ProductAddedDialog: undefined,
    LoginDialog: undefined
}
const Stack = createStackNavigator<ModalStackProps>();

const ModalStack = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogged ? (
        <>
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen
              name='SelectColorDialog'
              component={SelectColorDialog}
            />
            <Stack.Screen name="ProductAddedDialog" component={ProductAddedDialog} />
          </Stack.Group>
        </>
      ) : (
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="LoginDialog" component={LoginDialog} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default ModalStack;
