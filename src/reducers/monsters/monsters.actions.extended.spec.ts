import {
  fetchBattleWins,
  setRandomMonster,
  setWinner,
  resetBattle,
} from './monsters.actions.extended';
import { MonsterServiceExtended } from './monsters.service.extended';
import monstersData from '../../../data/monsters.json';
import { store } from '../../app/store';
import { Battle } from '../../models/interfaces/battle.interface';

jest.mock('./monsters.service.extended');

describe('Monsters Actions Extended', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchBattleWins', () => {
    it('should fetch battle result successfully', async () => {
      const mockBattle: Battle = {
        winner: monstersData.monsters[0],
        tie: false,
      };

      (MonsterServiceExtended.battle as jest.Mock).mockResolvedValue(
        mockBattle,
      );

      const result = await store.dispatch(
        fetchBattleWins({
          monster1Id: 'monster-1',
          monster2Id: 'monster-2',
        }),
      );

      expect(result.type).toBe('monsters/fetchBattleWins/fulfilled');
      expect(result.payload).toEqual(mockBattle);
      expect(MonsterServiceExtended.battle).toHaveBeenCalledWith({
        monster1Id: 'monster-1',
        monster2Id: 'monster-2',
      });
    });

    it('should handle battle with tie', async () => {
      const mockBattle = {
        winner: monstersData.monsters[0],
        tie: true,
      };

      (MonsterServiceExtended.battle as jest.Mock).mockResolvedValue(
        mockBattle,
      );

      const result = await store.dispatch(
        fetchBattleWins({
          monster1Id: 'monster-3',
          monster2Id: 'monster-4',
        }),
      );

      const payload = result.payload as Battle;
      expect(result.payload).toEqual(mockBattle);
      expect(payload.tie).toBe(true);
    });

    it('should handle rejected battle', async () => {
      (MonsterServiceExtended.battle as jest.Mock).mockRejectedValue(
        new Error('Battle failed'),
      );

      const result = await store.dispatch(
        fetchBattleWins({
          monster1Id: 'monster-1',
          monster2Id: 'monster-2',
        }),
      );

      expect(result.type).toBe('monsters/fetchBattleWins/rejected');
    });
  });

  describe('setRandomMonster', () => {
    it('should have correct action type', async () => {
      const result = await store.dispatch(setRandomMonster());

      expect(result.type).toBe('monsters/setRandomMonster/fulfilled');
    });
  });

  describe('setWinner', () => {
    it('should return the current winner from state', async () => {
      const result = await store.dispatch(setWinner());

      expect(result.type).toBe('monsters/setWinner/fulfilled');
    });
  });

  describe('resetBattle', () => {
    it('should create a reset battle action', () => {
      const action = resetBattle();

      expect(action.type).toBe('monsters/resetBattle');
      expect(action.payload).toBeUndefined();
    });
  });
});
