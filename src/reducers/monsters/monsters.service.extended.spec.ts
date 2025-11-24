import { MonsterServiceExtended } from './monsters.service.extended';
import { API_URL } from '../../constants/env';
import monstersData from '../../../data/monsters.json';

describe('Monsters Service Extended', () => {
  beforeEach(() => {
    globalThis.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should get the winner of the battle of monsters', async () => {
    const mockBattleResult = {
      winner: monstersData.monsters[0],
      tie: false,
    };

    (globalThis.fetch as jest.Mock).mockResolvedValue({
      json: async () => mockBattleResult,
    });

    const result = await MonsterServiceExtended.battle({
      monster1Id: 'monster-1',
      monster2Id: 'monster-2',
    });

    expect(globalThis.fetch).toHaveBeenCalledWith(`${API_URL}/battle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        monster1Id: 'monster-1',
        monster2Id: 'monster-2',
      }),
    });
    expect(result).toEqual(mockBattleResult);
  });

  it('should handle battle with tie result', async () => {
    const mockBattleResult = {
      winner: null,
      tie: true,
    };

    (globalThis.fetch as jest.Mock).mockResolvedValue({
      json: async () => mockBattleResult,
    });

    const result = await MonsterServiceExtended.battle({
      monster1Id: 'monster-1',
      monster2Id: 'monster-2',
    });

    expect(result).toEqual(mockBattleResult);
    expect(result.tie).toBe(true);
  });
});
