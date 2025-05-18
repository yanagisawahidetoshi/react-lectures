export function createId(
  todos: {
    id: number;
    title: string;
    createdAt: string;
    isCompleted: boolean;
  }[]
) {
  const maxId =
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;
  return maxId + 1;
}

export function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute}`;
}

export function createTodo(title: string, id: number) {
  return {
    title,
    id,
    isCompleted: false,
    createdAt: formatDate(new Date()),
  };
}
