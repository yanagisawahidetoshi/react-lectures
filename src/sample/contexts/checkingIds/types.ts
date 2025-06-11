export type TCheckingIdsState = number[];

export type AddID = {
  type: 'ADD_ID';
  payload: number;
};

export type RemoveID = {
  type: 'REMOVE_ID';
  payload: number;
};

export type ClearIds = {
  type: 'CLEAR_IDS';
};

export type SetIds = {
  type: 'SET_IDS';
  payload: number[];
};

export type TCheckingIdsActions = AddID | RemoveID | ClearIds | SetIds;
