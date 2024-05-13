import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegCardList from './regcardlist';

const REGISTERED_LIST = [
  {
    name: 'Alex',
    surname: 'Fang',
    birth: '1985-04-25',
    country: 'Mexico',
    langueges: 'english',
    receiving: '',
    photo: '',
  },
  {
    name: 'Samanta',
    surname: 'Fox',
    birth: '1985-03-25',
    country: 'Chile',
    langueges: 'english',
    receiving: '',
    photo: '',
  },
];

describe('RegCardList component', () => {
  it('RegCardList renders with 2 regcards', () => {
    render(<RegCardList />);
    expect(screen.getByText('Alex')).toBeInTheDocument();
    expect(screen.getByText('Chile')).toBeInTheDocument();
    expect(screen.getAllByTestId('regcard').length).toEqual(2);
    expect(screen.getByTestId('regcard-container')).toBeInTheDocument();
  });
});
