export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const IS_SEARCHING = 'IS_SEARCHING';
export const IS_NOT_SEARCHING = 'IS_NOT_SEARCHING';

export const changeSearchValue = (value) => ({
  type: CHANGE_SEARCH_VALUE,
  value: value,
});

export const isSearching = () => ({
  type: IS_SEARCHING,
});

export const isNotSearching = () => ({
  type: IS_NOT_SEARCHING,
});
