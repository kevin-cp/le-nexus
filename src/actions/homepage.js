export const CHANGE_GAMESEARCH_INPUT = 'CHANGE_GAMESEARCH_INPUT';
export const ADD_FRIEND_TO_FILTER = 'ADD_FRIEND_TO_FILTER';
export const RESET_FRIEND_LIST = 'RESET_FRIEND_LIST';
export const DISPLAY_ALL_FRIENDS = 'DISPLAY_ALL_FRIENDS';
export const NO_FRIEND_FOUND = 'NO_FRIEND_FOUND';
export const FRIENDS_FOUND = 'FRIENDS_FOUND';

export const handleSearchGame = (newSearch) => ({
  type: CHANGE_GAMESEARCH_INPUT,
  newSearch,
});

export const addFriendToFilter = (addFriend) => ({
  type: ADD_FRIEND_TO_FILTER,
  addFriend,
});

export const resetFriendList = () => ({
  type: RESET_FRIEND_LIST,
});

export const displayAllFriends = () => ({
  type: DISPLAY_ALL_FRIENDS,
});


export const noFriendsFound = () => ({
  type: NO_FRIEND_FOUND,
});

export const friendsFound = () => ({
  type: FRIENDS_FOUND,
});
