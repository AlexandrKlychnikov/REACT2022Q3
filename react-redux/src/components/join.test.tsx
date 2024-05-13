import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Join } from './join';
import userEvent from '@testing-library/user-event';

describe('Join component', () => {
  it('Form Register renders with input labels "Name" and "Country"', () => {
    render(<Join />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Country:')).toBeInTheDocument();
  });
  it('errors messages renders and finaly after submit renders card', async () => {
    render(<Join />);
    userEvent.click(screen.getByTestId('submit'));
    expect(screen.getByText('*country must be selected')).toBeInTheDocument();
    expect(screen.getAllByText('*this field must be filled in').length).toEqual(3);
    userEvent.type(screen.getByTestId('name'), 'Alex');
    expect(
      screen.queryByText('*the name must contain only Latin characters')
    ).not.toBeInTheDocument();
    userEvent.type(screen.getByTestId('surname'), 'Fang');
    fireEvent.change(screen.getByTestId('birth'), {
      target: { value: '2020-03-03' },
    });
    expect(screen.getByTestId('birth')).toHaveValue('2020-03-03');
    expect(screen.getByText('*you must be over 18 years old')).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('birth'), {
      target: { value: '2000-03-03' },
    });
    userEvent.selectOptions(screen.getByTestId('country'), ['Mexico']);
    expect(screen.queryByText('*at least one languege must be selected')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('fre'));
  });
});
