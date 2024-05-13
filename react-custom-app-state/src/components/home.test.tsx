import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from './home';
import { CARD_STATE } from './cards/cardlist.test';
import userEvent from '@testing-library/user-event';
import { MAIN_URL } from 'shared/constants';

const server = setupServer(
  rest.get(`${MAIN_URL}photos?query=boat`, (req, res, ctx) => {
    return res(ctx.json({ results: CARD_STATE }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays 2 cards with boats', async () => {
  render(<Home />);

  userEvent.type(screen.getByTestId('search'), 'boat{enter}');
  expect(screen.getByText('Downloading...')).toBeInTheDocument();
  await waitFor(() => screen.getAllByTestId('card'));
  expect((await screen.findAllByTestId('card')).length).toEqual(2);
  expect(screen.getByText('by Ivan Ragozin')).toBeInTheDocument();
});

test('handles server error', async () => {
  server.use(
    rest.get(`${MAIN_URL}photos?query=boat`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Home />);
  userEvent.type(screen.getByTestId('search'), 'boat{enter}');
  await waitFor(() => screen.getByTestId('error-alert'));
  expect(screen.getByTestId('error-alert')).toHaveTextContent('Something went wrong.');
});

test('handles no matches found', async () => {
  server.use(
    rest.get(`${MAIN_URL}photos?query=1qa`, (req, res, ctx) => {
      return res(ctx.json({ results: [] }));
    })
  );

  render(<Home />);
  userEvent.type(screen.getByTestId('search'), '1qa{enter}');
  await waitFor(() => screen.getByText('No matches found.'));
  expect(screen.getByTestId('card-container')).toHaveTextContent('No matches found.');
});
