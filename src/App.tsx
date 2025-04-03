import { Route, Routes } from 'react-router-dom';
import Lesson1 from './lesson/Lesson1';

import './App.css';

function App() {
  return (
    <div>
      <h1>React講義プロジェクト</h1>
      <Routes>
        <Route path="/lesson1" element={<Lesson1 />} />
      </Routes>
    </div>
  );
}

export default App;
