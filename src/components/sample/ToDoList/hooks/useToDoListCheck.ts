import { useCheckingIdsDispatch } from '../../../../sample/contexts/checkingIds/contexts';
import type { ToDo } from '../../../../types';

export type UseToDoListCheckReturn = {
  handleChangeAllCheckIds: (v: boolean) => void;
};

export const useToDoListCheck = (todos: ToDo[]): UseToDoListCheckReturn => {
  const dispatch = useCheckingIdsDispatch();

  function handleChangeAllCheckIds(isChecked: boolean) {
    if (isChecked) {
      dispatch({ type: 'SET_IDS', payload: todos.map((v) => v.id) });
    } else {
      dispatch({ type: 'CLEAR_IDS' });
    }
  }

  return {
    handleChangeAllCheckIds,
  };
};
