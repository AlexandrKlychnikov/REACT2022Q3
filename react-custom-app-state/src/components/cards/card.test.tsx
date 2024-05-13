import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './card';

test('renders card with testId card', () => {
  const cardData = {
    id: 'qToVxSYXPYU',
    image:
      'https://images.unsplash.com/photo-1531012278403-e5…fDB8MHx8fDE2NjcxMTM0OTQ&ixlib=rb-4.0.3&q=80&w=400',
    author: 'Roberto H',
    setModal: (e: React.MouseEvent) => void { e },
  };
  render(<Card id={cardData.id} image={cardData.image} author={cardData.author} />);
  expect(screen.getByTestId('card')).toBeInTheDocument();
  expect(screen.getByText(/by Roberto H/)).toBeInTheDocument();
});
