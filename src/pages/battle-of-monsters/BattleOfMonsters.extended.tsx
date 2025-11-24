import React from 'react';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.extended.styled';
import {
  monsterWins,
  selectRandomMonster,
} from '../../reducers/monsters/monsters.selectors.extended';
import { fetchBattleWins } from '../../reducers/monsters/monsters.actions.extended';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay.extended';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useAppSelector(selectMonsters);
  const selectedMonster = useAppSelector(selectSelectedMonster);
  const randomMonster = useAppSelector(selectRandomMonster);
  const monsterWinner = useAppSelector(monsterWins);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    dispatch(
      fetchBattleWins({
        monster1Id: selectedMonster?.id,
        monster2Id: randomMonster?.id,
      }),
    );
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {monsterWinner && (
        <WinnerDisplay text={monsterWinner.winner.name}></WinnerDisplay>
      )}

      <BattleSection>
        <MonsterBattleCard
          monster={selectedMonster}
          title={selectedMonster?.name || 'Player'}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          monster={randomMonster}
          title="Computer"></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
