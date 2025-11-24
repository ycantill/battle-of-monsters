import { monstersReducerExtended } from './monsters.reducer.extended';
import { setRandomMonster } from './monsters.actions.extended';
import monstersData from '../../../data/monsters.json';

describe('Monsters Reducer Extended', () => {
  const initialState = {
    selectRandomMonster: null,
    winner: null,
  };

  it('should add the random monster to the state', () => {
    const randomMonster = monstersData.monsters[0];
    
    const action = {
      type: setRandomMonster.fulfilled.type,
      payload: randomMonster,
    };

    const newState = monstersReducerExtended(initialState, action);

    expect(newState.selectRandomMonster).toEqual(randomMonster);
  });

  it('should set random monster to null when no monster is available', () => {
    const action = {
      type: setRandomMonster.fulfilled.type,
      payload: null,
    };

    const newState = monstersReducerExtended(initialState, action);

    expect(newState.selectRandomMonster).toBeNull();
  });

  it('should maintain winner state when setting random monster', () => {
    const stateWithWinner = {
      selectRandomMonster: null,
      winner: {
        winner: monstersData.monsters[0],
        tie: false,
      },
    };

    const action = {
      type: setRandomMonster.fulfilled.type,
      payload: monstersData.monsters[1],
    };

    const newState = monstersReducerExtended(stateWithWinner, action);

    expect(newState.selectRandomMonster).toEqual(monstersData.monsters[1]);
    expect(newState.winner).toEqual(stateWithWinner.winner);
  });
});
