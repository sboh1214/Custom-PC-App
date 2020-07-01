import React from 'react';
import {render} from '@testing-library/react-native';
import App from 'App';

jest.useFakeTimers();

test('App', async () => {
  render(<App />);
});
