import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchForm } from 'components/forms/search-form';

describe('SearchForm component', () => {
  it('SearchForm to be in the document', () => {
    render(<SearchForm />);
    expect(screen.getByTestId('search-form')).toBeInTheDocument;
  });
});
