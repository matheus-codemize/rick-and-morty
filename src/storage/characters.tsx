import useLocalStorage from '.';

type MyFavoriteCharacters = Array<number>;

export const useMyFavoriteCharactersStorage = () =>
  useLocalStorage<MyFavoriteCharacters>('my-favorite-characters', []);
