import { TCheckingIdsActions, TCheckingIdsState } from './types';

export const reducer = (
  state: TCheckingIdsState,
  action: TCheckingIdsActions
) => {
  switch (action.type) {
    case 'ADD_CHECKING_ID':
      return [...state, action.payload];
    case 'REMOVE_CHECKING_ID':
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};
