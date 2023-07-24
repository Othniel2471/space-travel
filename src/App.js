import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import RocketPage from './pages/RocketPage';
import MissionPage from './pages/MissionPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RocketPage />} />
          <Route path="/mission" element={<MissionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
