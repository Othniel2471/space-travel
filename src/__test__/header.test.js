// Header.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/layouts/Header';

test('renders the Header component correctly', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

  // Assert that the logo and header text are rendered correctly
  const logoElement = screen.getByAltText('Space Travelers Hub');
  expect(logoElement).toBeInTheDocument();

  const headerTextElement = screen.getByText('Space Travelers Hub');
  expect(headerTextElement).toBeInTheDocument();

  // Assert that the navigation links are rendered correctly
  const rocketNavLink = screen.getByRole('link', { name: /rocket/i });
  const missionsNavLink = screen.getByRole('link', { name: /missions/i });
  const profileNavLink = screen.getByRole('link', { name: /profile/i });

  expect(rocketNavLink).toBeInTheDocument();
  expect(missionsNavLink).toBeInTheDocument();
  expect(profileNavLink).toBeInTheDocument();
});
