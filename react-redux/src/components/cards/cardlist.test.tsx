import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardList from './cardlist';
import { IResponseItem } from 'shared/types';

export const CARD_STATE: IResponseItem[] = [
  {
    created_at: '2018-07-08T01:11:36Z',
    description: '',
    urls: {
      full: 'https://images.unsplash.com/photo-1531012278403-e5db3b774373?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyOTg2MzF8MHwxfHNlYXJjaHwxfHxib2F0fGVufDB8MHx8fDE2NjcxMTM0OTQ&ixlib=rb-4.0.3&q=80',
      small:
        'https://images.unsplash.com/photo-1531012278403-e5db3b774373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg2MzF8MHwxfHNlYXJjaHwxfHxib2F0fGVufDB8MHx8fDE2NjcxMTM0OTQ&ixlib=rb-4.0.3&q=80&w=400',
    },
    links: {
      download: '',
    },
    height: '4870',
    id: 'Oi1fJwi35oI',
    user: { name: 'Osman Rana' },
    width: '7301',
  },
  {
    created_at: '2020-06-28T13:37:15Z',
    description: 'Crimea ',
    urls: {
      full: 'https://images.unsplash.com/photo-1593351415075-3bac9f45c877?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyOTg2MzF8MHwxfHNlYXJjaHwyfHxib2F0fGVufDB8MHx8fDE2NjcxMTM0OTQ&ixlib=rb-4.0.3&q=80',
      small:
        'https://images.unsplash.com/photo-1593351415075-3bac9f45c877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg2MzF8MHwxfHNlYXJjaHwyfHxib2F0fGVufDB8MHx8fDE2NjcxMTM0OTQ&ixlib=rb-4.0.3&q=80&w=400',
    },
    height: '3640',
    id: 'o9oQaOGpLz0',
    user: { name: 'Ivan Ragozin' },
    width: '5464',
    links: { download: '' },
  },
];

describe('CardList component', () => {
  it('CardList renders list of 2 cards', () => {
    render(<CardList />);
    expect(screen.getByText('by Ivan Ragozin')).toBeInTheDocument();
    expect(screen.getAllByTestId('card').length).toEqual(2);
    expect(screen.getByTestId('card-container')).toBeInTheDocument();
  });
});
