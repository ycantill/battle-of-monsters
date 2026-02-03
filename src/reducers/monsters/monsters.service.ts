import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> => {
  // En producción usa Firebase Functions (/monsters)
  // En desarrollo usa JSON Server local (/monsters)
  const endpoint =
    process.env.NODE_ENV === 'production' ? '/monsters' : '/monsters';
  return await fetch(`${API_URL}${endpoint}`).then(response =>
    response.json(),
  );
};

export const MonsterService = {
  getAll,
};
