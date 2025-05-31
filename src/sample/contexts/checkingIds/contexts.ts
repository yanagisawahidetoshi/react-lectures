import { createContext, Dispatch, useContext } from 'react';
import { TCheckingIdsActions, TCheckingIdsState } from './types';

export const CheckingIdsStateContext = createContext<TCheckingIdsState>([]);
export const CheckingIdsDispatchContext =
  createContext<Dispatch<TCheckingIdsActions> | null>(null);

export const useCheckingIdsState = (): TCheckingIdsState => {
  return useContext(CheckingIdsStateContext);
};

export const useCheckingIdsDispatch = (): Dispatch<TCheckingIdsActions> => {
  const context = useContext(CheckingIdsDispatchContext);
  if (context === null) {
    throw new Error(
      'useCheckingIdsDispatch must be used within a CheckingIdsProvider'
    );
  }
  return context;
};
