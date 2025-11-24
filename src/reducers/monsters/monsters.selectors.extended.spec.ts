import {
  monsterWins,
  selectRandomMonster,
  randomMonsters,
} from './monsters.selectors.extended';
import { RootState } from '../../app/store';
import monstersData from '../../../data/monsters.json';

describe('Monsters Selectors Extended', () => {
  describe('monsterWins', () => {
    it('should return the winner from state', () => {
      const mockWinner = {
        winner: monstersData.monsters[0],
        tie: false,
      };

      const state = {
        monstersExtended: {
          selectRandomMonster: null,
          winner: mockWinner,
        },
      } as unknown as RootState;

      expect(monsterWins(state)).toEqual(mockWinner);
    });

    it('should return null when no winner exists', () => {
      const state = {
        monstersExtended: {
          selectRandomMonster: null,
          winner: null,
        },
      } as unknown as RootState;

      expect(monsterWins(state)).toBeNull();
    });
  });

  describe('selectRandomMonster', () => {
    it('should return the random monster from state', () => {
      const randomMonster = monstersData.monsters[1];

      const state = {
        monstersExtended: {
          selectRandomMonster: randomMonster,
          winner: null,
        },
      } as unknown as RootState;

      expect(selectRandomMonster(state)).toEqual(randomMonster);
    });

    it('should return null when no random monster exists', () => {
      const state = {
        monstersExtended: {
          selectRandomMonster: null,
          winner: null,
        },
      } as unknown as RootState;

      expect(selectRandomMonster(state)).toBeNull();
    });
  });

  describe('randomMonsters', () => {
    it('should return empty array when no monster is selected', () => {
      const state = {
        monsters: {
          monsters: monstersData.monsters,
          selectedMonster: null,
        },
      } as unknown as RootState;

      expect(randomMonsters(state)).toEqual([]);
    });

    it('should filter out the selected monster', () => {
      const selectedMonster = monstersData.monsters[0];

      const state = {
        monsters: {
          monsters: monstersData.monsters,
          selectedMonster,
        },
      } as unknown as RootState;

      const result = randomMonsters(state);

      expect(result).toHaveLength(monstersData.monsters.length - 1);
      expect(result).not.toContainEqual(selectedMonster);
      expect(result.every(m => m.id !== selectedMonster.id)).toBe(true);
    });

    it('should return all monsters except selected one', () => {
      const selectedMonster = monstersData.monsters[2];

      const state = {
        monsters: {
          monsters: monstersData.monsters,
          selectedMonster,
        },
      } as unknown as RootState;

      const result = randomMonsters(state);
      const expectedMonsters = monstersData.monsters.filter(
        m => m.id !== selectedMonster.id,
      );

      expect(result).toEqual(expectedMonsters);
    });
  });
});
