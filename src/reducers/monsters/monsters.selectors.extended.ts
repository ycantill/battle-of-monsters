import { RootState } from '../../app/store';

export const monsterWins = (state: RootState) => state.monstersExtended.winner;

export const selectRandomMonster = (state: RootState) =>
  state.monstersExtended.selectRandomMonster;

export const randomMonsters = (state: RootState) => {
  const allMonsters = state.monsters.monsters;
  const selectedMonster = state.monsters.selectedMonster;

  if (!selectedMonster) return [];

  return allMonsters.filter(monster => monster.id !== selectedMonster.id);
};
