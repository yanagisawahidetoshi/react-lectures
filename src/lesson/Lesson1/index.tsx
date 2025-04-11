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
    // 仕様が明確ではないので複数一致する場合も考慮
    console.log(todos.filter(v => v.id === 1))
  };

  // 2. newTodoをtodosに追加する
  const addTodo = () => {
    const newTodo = { id: 6, title: 'Todo 6', completed: false };
    todos.push(newTodo)  // 課題の指示は元のリストを更新せよというものに読めるのでこのようにしている
    console.log(todos);
  };

  // 3. completed: true のtodoのみ表示する
  const filterCompletedTodos = () => {
    console.log(todos.filter(v => v.completed))
  };

  // 4. idが1のtodoのtitleをUpdated Todo 1に変更する
  const editTodoById1 = () => {
    todos.filter(v => v.id === 1).forEach(v => v.title = 'Updated Todo 1')
    console.log(todos)
  };

  // 5. idが1のtodoを削除する
  const deleteTodoById1 = () => {
    todos.forEach((v, k) => {
      if (v.id === 1) delete todos[k]
    })
    console.log(todos)
  };

  example();
  findTodoById1();
  addTodo();
  filterCompletedTodos();
  editTodoById1();
  deleteTodoById1();

  return <h1>Lesson 1</h1>;
}
