import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import TwoOptionsDialog from '../../../components/TwoOptionDialog';
import {LOGIN_DIALOG_IMG} from '../../../constants/Images';
import {MyProfileStackProps} from '../../../navigation/MyProfileStack';
import {useAppDispatch} from '../../../app/hooks';
import {authSlice} from '../../auth/slice/authSlice';
import {CompositeScreenProps} from '@react-navigation/native';
import {DrawerStackProps} from '../../../navigation/DrawerStack';

type Props = CompositeScreenProps<
  StackScreenProps<MyProfileStackProps, 'LogoutDialog'>,
  StackScreenProps<DrawerStackProps>
>;

const LogoutDialog = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(authSlice.actions.logout());
    navigation.navigate('MainStack', {screen: 'Main'});
  };

  return (
    <TwoOptionsDialog
      icon={LOGIN_DIALOG_IMG}
      title={'Are you sure you want to logout?'}
      negativeButtonText="cancel"
      positiveButtonText="logout"
      onNegativeButtonPress={() => navigation.goBack()}
      onPossitiveButtonPress={logout}
    />
  );
};

export default LogoutDialog;
