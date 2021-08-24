export const CHANGE_GAMESEARCH_INPUT = 'CHANGE_GAMESEARCH_INPUT';

export const handleSearchGame = (newSearch) => ({
  type: CHANGE_GAMESEARCH_INPUT,
  newSearch,
});
