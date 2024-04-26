import { GenresLookup } from '../types';

export const getGenreNames = (genreIds: number[], genres: GenresLookup): string => {
  return genreIds.map(id => genres[id]).join(', ');
};
