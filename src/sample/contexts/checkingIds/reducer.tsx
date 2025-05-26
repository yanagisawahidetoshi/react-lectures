import { TCheckingIdsActions, TCheckingIdsState } from './types';

export const reducer = (
  state: TCheckingIdsState,
  action: TCheckingIdsActions
) => {
  switch (action.type) {
    case 'ADD_ID':
      return state.includes(action.payload)
        ? [...state]
        : [...state, action.payload];
    case 'REMOVE_ID':
      return state.filter((id) => id !== action.payload);
    case 'CLEAR_IDS':
      return [];
    case 'SET_IDS':
      return action.payload;
    default:
      return state;
  }
};
