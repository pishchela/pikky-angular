export enum SocketEvents {
  JOIN = 'join',
  DELETE_CARD = 'deleteCard',
  EDIT_CARD = 'editCard',
  USER_READY = 'userReady',
  SET_BORD_TYPE_GAME = 'setBordTypeGame',
  SET_BORD_TYPE_EDIT = 'setBordTypeEdit',
  USER_DATA = 'userData',
  CARDS_DATA = 'cardsData',
}

export enum SocketNotificationEvents {
  USER_CONNECTED = 'userConnected',
  USER_DISCONNECTED = 'userDisconnected',
  USER_SET_READY = 'userSetReady',
}
