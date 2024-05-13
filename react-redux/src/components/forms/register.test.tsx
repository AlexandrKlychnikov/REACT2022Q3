import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Register } from './register';
import userEvent from '@testing-library/user-event';

describe('Register component', () => {
  it('Form Register renders with input labels "Name" and "Country"', () => {
    render(<Register />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Country:')).toBeInTheDocument();
  });
  it('errors messages renders', () => {
    render(<Register />);
    userEvent.type(screen.getByTestId('name'), 'Alex%');
    userEvent.click(screen.getByTestId('submit'));
    expect(screen.getByText('*the name must contain only Latin characters')).toBeInTheDocument();
    expect(screen.getByText('*country must be selected')).toBeInTheDocument();
    expect(screen.getAllByText('*this field must be filled in').length).toEqual(2);
    userEvent.type(screen.getByTestId('name'), '{backspace}');
    expect(
      screen.queryByText('*the name must contain only Latin characters')
    ).not.toBeInTheDocument();
    userEvent.type(screen.getByTestId('surname'), 'Fang');
    fireEvent.change(screen.getByTestId('birth'), {
      target: { value: '2020-03-03' },
    });
    expect(screen.getByTestId('birth')).toHaveValue('2020-03-03');
    expect(screen.getByText('*you must be over 18 years old')).toBeInTheDocument();
    userEvent.selectOptions(screen.getByTestId('country'), ['Mexico']);
    userEvent.type(screen.getByTestId('name'), 'Alex');
    expect(screen.queryByText('*this field must be filled in')).not.toBeInTheDocument();
    expect(screen.queryByText('*at least one languege must be selected')).toBeInTheDocument();
  });
});
