import React from 'react';

import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  BattleMonsterName,
  BattleMonsterImage,
  BattleMonsterStatName,
  ProgressBar,
} from './MonsterBattleCard.extended.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const statsProperties: Set<string> = new Set([
  'hp',
  'attack',
  'defense',
  'speed',
]);

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  const stats = Object.entries(monster || {}).filter(([key]) =>
    statsProperties.has(key),
  );

  return (
    <BattleMonsterCard centralized={!monster}>
      {monster ? (
        <>
          <BattleMonsterImage src={monster?.imageUrl} />
          <BattleMonsterName>{monster?.name}</BattleMonsterName>
          {stats.map(([key, value]) => (
            <React.Fragment key={key}>
              <BattleMonsterStatName>{key}</BattleMonsterStatName>
              <ProgressBar variant="determinate" value={value as number} />
            </React.Fragment>
          ))}
        </>
      ) : (
        <BattleMonsterTitle>{title}</BattleMonsterTitle>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
