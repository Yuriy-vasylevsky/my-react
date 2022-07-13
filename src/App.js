import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import HomePage from './Pages/HomePage/HomePage';
const Layouts = lazy(() => import('./Components/Layouts/Layouts'));

export default function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route
              path="home"
              index
              // element={<PrivateRout component={Contact} />}
              element={<HomePage />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
