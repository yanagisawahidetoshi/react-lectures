import type { ToDo } from '../../../../types';

export type UseToDoListSortReturn = {
  sortedTodos: ToDo[];
};

export const useToDoListSort = (todos: ToDo[]): UseToDoListSortReturn => {
  const sortedTodos = [...todos].sort(
    (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
  );

  return {
    sortedTodos,
  };
};
