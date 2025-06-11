import { ReactNode, useReducer } from 'react';
import {
  CheckingIdsDispatchContext,
  CheckingIdsStateContext,
} from './contexts';
import { reducer } from './reducer';

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
