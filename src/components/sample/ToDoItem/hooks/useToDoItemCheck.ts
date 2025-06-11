import { useCheckingIdsDispatch } from '../../../../sample/contexts/checkingIds/contexts';

export type UseToDoItemCheckReturn = {
  handleChangeCompleted: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useToDoItemCheck = (todoId: number): UseToDoItemCheckReturn => {
  const dispatch = useCheckingIdsDispatch();

  function handleChangeCompleted(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      dispatch({ type: 'ADD_ID', payload: todoId });
    } else {
      dispatch({ type: 'REMOVE_ID', payload: todoId });
    }
  }

  return {
    handleChangeCompleted,
  };
};
