import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Navbar } from '../components/Navbar';

test('renders the correct content', () => {
  const { getByText } = render(<Navbar />);

  // Navbar and search-bar content
  getByText('maindish');
  getByText('Search');
})