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
    console.log(todos.find(v => v.id === 1))
  };

  // 2. newTodoをtodosに追加する
  const addTodo = () => {
    const newTodo = { id: 6, title: 'Todo 6', completed: false };
    console.log([...todos, newTodo]);  // 非破壊的
  };

  // 3. completed: true のtodoのみ表示する
  const filterCompletedTodos = () => {
    console.log(todos.filter(v => v.completed))
  };

  // 4. idが1のtodoのtitleをUpdated Todo 1に変更する
  const editTodoById1 = () => {
    console.log(todos.map(v => {
      if (v.id === 1) {
        const v2 = {...v}
        v2.title = 'Updated Todo 1'
        return v2
      } else {
        return v
      }
    }))
  };

  // 5. idが1のtodoを削除する
  const deleteTodoById1 = () => {
    console.log(todos.filter(v => v.id !== 1))
  };

  example();
  findTodoById1();
  addTodo();
  filterCompletedTodos();
  editTodoById1();
  deleteTodoById1();

  return <h1>Lesson 1</h1>;
}
