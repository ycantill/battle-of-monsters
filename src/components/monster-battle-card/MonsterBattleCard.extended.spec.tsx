import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MonsterBattleCard } from './MonsterBattleCard.extended';
import monstersData from '../../../data/monsters.json';

describe('MonsterBattleCardExtended', () => {
  it('renders the monster card correctly with a monster', () => {
    const monster = monstersData.monsters[0];
    
    render(<MonsterBattleCard monster={monster} />);
    
    expect(screen.getByText(monster.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', monster.imageUrl);
  });

  it('renders title when no monster is provided', () => {
    render(<MonsterBattleCard title="Player" />);
    
    expect(screen.getByText('Player')).toBeInTheDocument();
  });

  it('renders monster stats correctly', () => {
    const monster = monstersData.monsters[0];
    
    render(<MonsterBattleCard monster={monster} />);
    
    expect(screen.getByText('hp')).toBeInTheDocument();
    expect(screen.getByText('attack')).toBeInTheDocument();
    expect(screen.getByText('defense')).toBeInTheDocument();
    expect(screen.getByText('speed')).toBeInTheDocument();
  });
});
