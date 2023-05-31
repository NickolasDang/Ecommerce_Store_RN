import React from 'react';
import 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {screen} from '@testing-library/react-native';
import MainStack from '../src/navigation/MainStack';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {getStore} from '../src/app/store';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-reanimated', () => {});
jest.mock('appcenter-analytics');

export const rednerWithRedux = (component: any) => {
  const storeTest = getStore();

  return render(<Provider store={storeTest}>{component}</Provider>);
};

describe('renders correctly', () => {
  test('the page is rendered', async () => {
    const component = (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    );

    rednerWithRedux(component);

    const header = await screen.findByText('Ecommerce Store');
    expect(header).toBeTruthy();
  });
});
