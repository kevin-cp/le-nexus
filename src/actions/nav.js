export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const IS_SEARCHING = 'IS_SEARCHING';
export const IS_NOT_SEARCHING = 'IS_NOT_SEARCHING';
export const SEARCH_FRIEND_PROFILE = 'SEARCH_FRIEND_PROFILE';
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';
export const FRIEND_REQUEST = 'FRIEND_REQUEST';
export const FRIEND_TO_REQUEST = 'FRIEND_TO_REQUEST';
export const CHECK_NOTIFICATION = 'CHECK_NOTIFICATION';
export const UPDATE_SENDER_ID = 'UPDATE_SENDER_ID';
// pour le refus ou l'ajout d'ami
export const HAS_NOTIFICATION = 'HAS_NOTIFICATION';
export const ACCEPT_FRIEND_REQUEST = 'ACCEPT_FRIEND_REQUEST';
export const DENY_FRIEND_REQUEST = 'DENY_FRIEND_REQUEST';
export const UPDATE_REQUEST_ID = 'UPDATE_REQUEST_ID';
export const HAS_NO_NOTIFICATION = 'HAS_NO_NOTIFICATION';
export const NUMBER_OF_NOTIFICATIONS = 'NUMBER_OF_NOTIFICATIONS';
export const REQUEST_SENT_MESSAGE = 'REQUEST_SENT_MESSAGE';
export const SENT_MESSAGE_DISAPPEARS = 'SENT_MESSAGE_DISAPPEARS';
export const EMPTY_SEARCHBAR = 'EMPTY_SEARCHBAR';

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

export const searchFriendProfile = () => ({
  type: SEARCH_FRIEND_PROFILE,
});

export const displayResults = (resultList) => ({
  type: DISPLAY_RESULTS,
  resultList,
});

export const friendRequest = () => ({
  type: FRIEND_REQUEST,
});

export const friendToRequest = (friendId) => ({
  type: FRIEND_TO_REQUEST,
  friendId,
});

export const checkNotification = () => ({
  type: CHECK_NOTIFICATION,
});

export const updateSenderId = (senderId) => ({
  type: UPDATE_SENDER_ID,
  senderId,
});

export const hasNotification = () => ({
  type: HAS_NOTIFICATION,
});

export const hasNoNotification = () => ({
  type: HAS_NO_NOTIFICATION,
});

// pour le refus ou l'acceptation d'ami

export const acceptFriendRequest = () => ({
  type: ACCEPT_FRIEND_REQUEST,
});

export const denyFriendRequest = () => ({
  type: DENY_FRIEND_REQUEST,
});

export const updateRequestId = (requestId) => ({
  type: UPDATE_REQUEST_ID,
  requestId,
});

export const numberOfNotifications = (number) => ({
  type: NUMBER_OF_NOTIFICATIONS,
  number,
});

export const requestSentMessage = () => ({
  type: REQUEST_SENT_MESSAGE,
});

export const SentMessageDisappears = () => ({
  type: SENT_MESSAGE_DISAPPEARS,
});

// vide la searchbar quand la demande d'ami est envoyée
export const emptySearchbar = () => ({
  type: EMPTY_SEARCHBAR,
});
