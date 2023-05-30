import React from 'react';
import 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { screen } from '@testing-library/react-native';
import MainStack from '../src/navigation/MainStack';
import { rednerWithRedux } from './testsUtil';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-reanimated', () => {});
jest.mock('appcenter-analytics')

describe('renders correctly', () => {
  test('the page is rendered',async () => {
    const component  = (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )

  rednerWithRedux(component)

  const header = await screen.findByText('Ecommerce Store')
  expect(header).toBeTruthy();
  })
});
