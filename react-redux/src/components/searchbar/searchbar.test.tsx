import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { SearchForm } from 'components/forms/search-form';
interface IStorage {
  [index: string]: string;
}

const localStorageMock = (function () {
  const store: IStorage = {};
  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
  };
})();

describe('SearchBar component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });
  it('SearchBar renders placeholder "Enter your request"', () => {
    render(<SearchForm />);
    expect(screen.getByPlaceholderText('Enter your request')).toBeInTheDocument();
  });
  it('saves the typed symbols in searchbar to the storage', () => {
    const { unmount } = render(<SearchForm />);
    userEvent.type(screen.getByTestId('search'), 'test');
    expect(screen.getByTestId('search')).toHaveValue('test');
    userEvent.click(screen.getByTestId('clear'));
    expect(screen.getByTestId('search')).toHaveValue('');
    userEvent.type(screen.getByTestId('search'), 'one more test');
    userEvent.type(screen.getByTestId('search'), '{enter}');
    expect(screen.getByTestId('search')).toHaveValue('one more test');
    unmount();
    expect(window.localStorage.getItem('searchBarValue')).toEqual('one more test');
  });
});
