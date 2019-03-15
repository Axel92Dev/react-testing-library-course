import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { FavoriteNumber } from '../favorite-number';

test('firing a change updates the value', () => {
  const { getByLabelText } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  fireEvent.change(input, { target: { value: 3 } });
  expect(input).toHaveAttribute('value', '3');
});

test('entering an invalid value shows an error message', () => {
  const { getByLabelText, getByTestId } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  fireEvent.change(input, { target: { value: 10 } });
  expect(getByTestId('error-message')).toHaveTextContent(/the number is invalid/i);
});
