import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MissionPage from '../pages/MissionPage';

// Mock the MissionItem component to avoid actual API calls
// eslint-disable-next-line react/display-name
jest.mock('../components/MissionItem', () => () => <div data-testid="mission-item">Mocked MissionItem</div>);

test('renders the MissionPage component correctly', () => {
  render(<MissionPage />);

  // Expect the MissionItem component to be rendered
  const missionItemElement = screen.getByTestId('mission-item');
  expect(missionItemElement).toBeInTheDocument();
});
