import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import RocketPage from './pages/RocketPage';
import MissionPage from './pages/MissionPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RocketPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
