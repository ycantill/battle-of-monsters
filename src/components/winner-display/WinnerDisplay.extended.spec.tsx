import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay.extended';

describe('WinnerDisplayExtended', () => {
  it('renders the winner text correctly', () => {
    render(<WinnerDisplay text="Red Dragon" />);
    
    const winnerText = screen.getByText('Red Dragon wins!');
    expect(winnerText).toBeInTheDocument();
  });

  it('renders empty text with wins suffix', () => {
    render(<WinnerDisplay text="" />);
    
    expect(screen.getByText(/wins!/i)).toBeInTheDocument();
  });
});
