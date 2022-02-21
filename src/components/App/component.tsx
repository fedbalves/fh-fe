import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyles } from '../GlobalStyle';

import store from '../../providers/store';
import { Flex } from '../../ui-components/Box';
import { GuestPicker } from '../../views/GuestPicker';

export const AppComponent = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Flex minHeight="100vh">
        <GuestPicker />
      </Flex>
    </Provider>
  );
}