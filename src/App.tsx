import { Route, Routes } from 'react-router-dom';
import Lesson1 from './lesson/Lesson1';

import './App.css';
import { ToDos } from './pages/ToDos';
import { ToDos as ToDosSample } from './pages/sample/ToDos';
import { MapLibreSamplePage } from './pages/maplibre_sample/index';
import { CheckingIdsProvider } from './sample/contexts/checkingIds/provider';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/to-dos" element={<ToDos />} />
        <Route path="/map" element={<MapLibreSamplePage />} />
        <Route
          path="/to-do-sample"
          element={
            <CheckingIdsProvider>
              <ToDosSample />
            </CheckingIdsProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
