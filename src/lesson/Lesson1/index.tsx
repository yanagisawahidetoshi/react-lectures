export default function Lesson1() {
  const todos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo 3', completed: false },
    { id: 4, title: 'Todo 4', completed: true },
    { id: 5, title: 'Todo 5', completed: false },
  ];

  const example = () => {
    console.log('example');
    console.log(todos);
  };

  // 1. idが1のtodoを見つける
  const findTodoById1 = () => {
    console.log('findTodoById1');
    const foundTodo = todos.find((todo) => todo.id === 1);
    console.log(foundTodo);
  };

  // 2. newTodoをtodosに追加する
  const addTodo = () => {
    const newTodo = { id: 6, title: 'Todo 6', completed: false };
    console.log('addTodo');
    const updatedTodos = [...todos, newTodo];
    console.log(updatedTodos);
  };

  // 3. completed: true のtodoのみ表示する
  const filterCompletedTodos = () => {
    console.log('filterCompletedTodos');
    const completedTodos = todos.filter((todo) => todo.completed === true);
    console.log(completedTodos);
  };

  // 4. idが1のtodoのtitleをUpdated Todo 1に変更する
  const editTodoById1 = () => {
    console.log('editTodoById1');
    const updatedTodos = todos.map((todo) =>
      todo.id === 1 ? { ...todo, title: 'Updated Todo 1' } : todo
    );
    console.log(updatedTodos);
  };

  // 5. idが1のtodoを削除する
  const deleteTodoById1 = () => {
    console.log('deleteTodoById1');
    const updatedTodos = todos.filter((todo) => todo.id !== 1);
    console.log(updatedTodos);
  };

  example();
  findTodoById1();
  addTodo();
  filterCompletedTodos();
  editTodoById1();
  deleteTodoById1();

  return <h1>Lesson 1</h1>;
}
