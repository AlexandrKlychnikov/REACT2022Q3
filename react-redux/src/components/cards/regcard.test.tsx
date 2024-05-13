import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegCard from './regcard';

test('renders card with name "Alex"', () => {
  render(
    <RegCard
      name={'Alex'}
      surname={'Fang'}
      birth={'1985-04-25'}
      country={'Mexico'}
      langueges={'english'}
      receiving={''}
      photo={''}
    />
  );
  expect(screen.getByTestId('regcard')).toBeInTheDocument();
  expect(screen.getByText(/Alex/)).toBeInTheDocument();
});
