export type TCheckingIdsState = number[];

export type AddCheckingIdAction = {
  type: 'ADD_CHECKING_ID';
  payload: number;
};

export type RemoveCheckingIdAction = {
  type: 'REMOVE_CHECKING_ID';
  payload: number;
};

export type TCheckingIdsActions = AddCheckingIdAction | RemoveCheckingIdAction;
