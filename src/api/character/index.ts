import api from '../connection';
import { ResponseInfo } from '../types';

import { Character, CharacterGenderEnum, CharacterStatusEnum } from './model';

export type RequestCharacter = {
  page: number;
  name?: string;
  type?: string;
  species?: string;
  gender?: CharacterGenderEnum;
  status?: CharacterStatusEnum | string;
};

export type ResponseCharacter = {
  info: ResponseInfo;
  results: Array<Character>;
};

const getAll = async (data?: RequestCharacter): Promise<ResponseCharacter> => {
  let filter = '?';

  data &&
    Object.entries(data).forEach(([key, value], index) => {
      if (value) {
        filter += `${index ? '&' : ''}${key}=${value}`;
      }
    });

  return await api.get(`/character/${filter}`);
};

export default { getAll };
