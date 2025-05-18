import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { reducer } from './reducer';
import { TCheckingIdsActions, TCheckingIdsState } from './types';

export const CheckingIdsStateContext = createContext<TCheckingIdsState>([]);
export const CheckingIdsDispatchContext =
  createContext<Dispatch<TCheckingIdsActions> | null>(null);

export const CheckingIdsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CheckingIdsStateContext.Provider value={state}>
      <CheckingIdsDispatchContext.Provider value={dispatch}>
        {children}
      </CheckingIdsDispatchContext.Provider>
    </CheckingIdsStateContext.Provider>
  );
};

export type { TCheckingIdsActions, TCheckingIdsState };
