import * as React from 'react';
import { View } from 'react-native';
import { render, screen } from '@testing-library/react-native';

test('repro invalid View render name', () => {
  render(<View />);
  expect(screen.toJSON()).toMatchInlineSnapshot(`<View />`);
});
