import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { randomMonsters } from './monsters.selectors.extended';
import { MonsterServiceExtended } from './monsters.service.extended';
import { Battle, Players } from '../../models/interfaces/battle.interface';

export const fetchBattleWins = createAsyncThunk<Battle, Players>(
  'monsters/fetchBattleWins',
  async (players: Players) => {
    return await MonsterServiceExtended.battle(players);
  },
);

export const setRandomMonster = createAsyncThunk(
  'monsters/setRandomMonster',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const availableMonsters = randomMonsters(state);

    if (availableMonsters.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * availableMonsters.length);
    return availableMonsters[randomIndex];
  },
);

export const setWinner = createAsyncThunk(
  'monsters/setWinner',
  async (_, { getState }) => {
    const state = getState() as RootState;
    return state.monstersExtended.winner;
  },
);

export const resetBattle = createAction('monsters/resetBattle');
