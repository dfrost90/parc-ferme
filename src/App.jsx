import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout';
import HomePage from './components/pages/home/HomePage';
import DriverPage from './components/pages/driver/DriverPage';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="driver">
            <Route path=":id" element={<DriverPage />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
