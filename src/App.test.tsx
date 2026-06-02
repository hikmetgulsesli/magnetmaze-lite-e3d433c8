import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { GameplayMagnetmazeLite } from './screens/GameplayMagnetmazeLite';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('toggles the gameplay polarity control', () => {
    render(<GameplayMagnetmazeLite />);

    const repelToggle = screen.getByRole('button', { name: 'Toggle polarity, currently repel' });
    expect(repelToggle).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(repelToggle);

    const attractToggle = screen.getByRole('button', { name: 'Toggle polarity, currently attract' });
    expect(attractToggle).toHaveAttribute('aria-pressed', 'false');
  });
});
