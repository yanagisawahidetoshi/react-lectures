import { Route, Routes } from 'react-router-dom';
import Lesson1 from './lesson/Lesson1';

import './App.css';
import { ToDos } from './pages/ToDos';
import { Profile } from './pages/sample/Profile';
import { ToDos as ToDosSample } from './pages/sample/ToDos';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/to-dos" element={<ToDos />} />
        <Route path="/to-do-sample" element={<ToDosSample />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
