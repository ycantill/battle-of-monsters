import { API_URL } from '../../constants/env';
import { Battle, Players } from '../../models/interfaces/battle.interface';

const battle = async (players: Players): Promise<Battle> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      monster1Id: players.monster1Id,
      monster2Id: players.monster2Id,
    }),
  }).then(response => response.json());

export const MonsterServiceExtended = {
  battle,
};
