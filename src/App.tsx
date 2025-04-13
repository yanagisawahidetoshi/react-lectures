import { Route, Routes } from 'react-router-dom';
import Lesson1 from './lesson/Lesson1';

import './App.css';
import { ToDos } from './pages/ToDos';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/ToDos" element={<ToDos />} />
      </Routes>
    </div>
  );
}

export default App;
